import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';
import { globby } from 'globby';
import * as cheerio from 'cheerio';

const root = process.cwd();
const siteDir = path.join(root, 'site');

// MAPPING per your ask
const mapping = [
  { name: 'tessellation-vote-portal', type: 'vite', src: 'dist', dest: '' }, // site/
  { name: 'shield-tesseract-access-portal', type: 'next', src: 'out', dest: 'login' }, // site/login/
  { name: 'furys-war-room-console', type: 'next', src: 'out', dest: 'admin' }, // site/admin/
  { name: 'tesseract-hall-of-heroes', type: 'next', src: 'out', dest: 'leaderboard' }, // site/leaderboard/
  { name: 'marvel-tesseract-dashboard', type: 'next', src: 'out', dest: 'user' }, // site/user/
];

const toDelete = [
  { name: 'hydra-glitch-hax', dir: 'dist' },
  { name: 'avenger-vote-vault', dir: 'dist' },
];

async function run(cmd, cwd) {
  const [bin, ...args] = cmd.split(' ');
  await execa(bin, args, { stdio: 'inherit', cwd });
}

async function ensureOut(app) {
  const appDir = path.join(root, app.name);
  const outDir = path.join(appDir, app.src);
  if (await fs.pathExists(outDir)) return true;

  console.log(`\n▶ Building/Exporting ${app.name} (${app.type})`);
  await run('npm ci', appDir);
  if (app.type === 'vite') {
    await run('npm run build', appDir);
  } else {
    // Next.js export
    const pkgPath = path.join(appDir, 'package.json');
    const pkg = await fs.readJSON(pkgPath);
    if (pkg.scripts?.export) {
      await run('npm run build', appDir);
      await run('npm run export', appDir);
    } else {
      await run('npx next build', appDir);
      await run('npx next export', appDir);
    }
  }
  return fs.pathExists(outDir);
}

async function copyApp(app) {
  const srcDir = path.join(root, app.name, app.src);
  const destDir = app.dest ? path.join(siteDir, app.dest) : siteDir;
  await fs.ensureDir(destDir);
  await fs.copy(srcDir, destDir, { overwrite: true });

  // If Next exported root-level _next exists inside srcDir, keep it inside subfolder too
  const nextAssets = path.join(srcDir, '_next');
  if (await fs.pathExists(nextAssets)) {
    await fs.copy(nextAssets, path.join(destDir, '_next'));
  }
}

function isAbsoluteAsset(u) {
  return typeof u === 'string' && (u.startsWith('/_next') || u.startsWith('/static') || (u.startsWith('/') && !u.startsWith('//')));
}

// Rewrite assets for subfolders to relative
async function rewriteHtml(rootDir) {
  const htmlFiles = await globby(['/*.html'], { cwd: rootDir, absolute: true });
  for (const file of htmlFiles) {
    let html = await fs.readFile(file, 'utf8');
    const $ = cheerio.load(html);

    $('link[href], script[src], img[src], a[href]').each((_, el) => {
      const tag = el.tagName || el.name;
      const attr = tag === 'a' ? 'href' : (tag === 'img' ? 'src' : (tag === 'script' ? 'src' : 'href'));
      const val = $(el).attr(attr);
      if (!val || /^https?:\/\//.test(val) || val.startsWith('#') || val.startsWith('mailto:')) return;

      if (isAbsoluteAsset(val)) {
        $(el).attr(attr, '.' + val); // /_next -> ./_next
      }
    });

    if ($('base').length === 0) {
      $('head').prepend('<base href="./">');
    }

    await fs.writeFile(file, $.html(), 'utf8');
  }
}

async function integrate() {
  // Cleanup site/
  await fs.remove(siteDir);
  await fs.ensureDir(siteDir);

  // Delete extra build folders as requested
  for (const d of toDelete) {
    const p = path.join(root, d.name, d.dir);
    if (await fs.pathExists(p)) {
      console.log(`🗑 Deleting ${d.name}/${d.dir}`);
      await fs.remove(p);
    }
  }

  // Ensure builds/exports
  for (const app of mapping) {
    const ok = await ensureOut(app);
    if (!ok) throw new Error(`Build/export not found for ${app.name}/${app.src}`);
  }

  // Copy per mapping
  for (const app of mapping) {
    console.log(`📦 Copying ${app.name}/${app.src} -> site/${app.dest || ''}`);
    await copyApp(app);
  }

  // Rewrite assets for subfolders
  await rewriteHtml(siteDir);

  console.log('\n✅ Static site integrated at ./site');
  console.log('Run: npm run serve:site → http://localhost:8080');
}

integrate().catch(err => { console.error(err); process.exit(1); });
