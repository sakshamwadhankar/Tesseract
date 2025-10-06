# Static Site Integration

This setup creates a single static website by integrating multiple applications into a unified site structure.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the integrated site:**
   ```bash
   npm run build:site
   ```

3. **Serve the site:**
   ```bash
   npm run serve:site
   ```

4. **Open in browser:**
   ```
   http://localhost:8080
   ```

## Routes

- `/` - Vote portal (tessellation-vote-portal)
- `/login` - Shield access portal (shield-tesseract-access-portal)
- `/admin` - Fury's war room console (furys-war-room-console)
- `/leaderboard` - Tesseract hall of heroes (tesseract-hall-of-heroes)
- `/user` - Marvel tesseract dashboard (marvel-tesseract-dashboard)

## Commands

- `npm run build:site` - Build and integrate all applications
- `npm run serve:site` - Start the static server
- `npm run rebuild:serve` - Build and serve in one command

## What It Does

1. **Cleans** the `site/` directory
2. **Builds/Exports** applications as needed:
   - Vite apps: Uses existing `dist/` folders
   - Next.js apps: Runs `npm run build` and `npm run export` (or `npx next export`)
3. **Copies** outputs according to mapping:
   - `tessellation-vote-portal/dist` → `site/` (root)
   - `shield-tesseract-access-portal/out` → `site/login/`
   - `furys-war-room-console/out` → `site/admin/`
   - `tesseract-hall-of-heroes/out` → `site/leaderboard/`
   - `marvel-tesseract-dashboard/out` → `site/user/`
4. **Deletes** unwanted build folders:
   - `hydra-glitch-hax/dist`
   - `avenger-vote-vault/dist`
5. **Rewrites** asset URLs to work in subfolders (e.g., `/_next` → `./_next`)
6. **Adds** `<base href="./">` tags where missing

## Notes

- Next.js apps must support `next export` (output: 'export' with images.unoptimized: true)
- This integration does not modify any UI pages; only build outputs are assembled
- Asset paths are rewritten for subfolder compatibility
- Clean URLs are served (e.g., `/login` serves `site/login/index.html`)

## Troubleshooting

### Next.js Export Issues

If Next.js export fails, ensure your `next.config.js` includes:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### TypeScript Build Errors

Some Next.js applications may have TypeScript errors that prevent building. If you encounter build failures:

1. **Fix TypeScript errors** in the failing application
2. **Or temporarily skip** problematic apps by commenting them out in `scripts/integrate-static.mjs`
3. **Test with Vite apps first** - they typically have fewer build issues

### Current Status

- ✅ **tessellation-vote-portal** (Vite) - Working
- ⚠️ **Next.js apps** - May require TypeScript fixes before building

The integration script will attempt to build all applications. If any fail, you can:
- Fix the TypeScript errors in the failing app
- Or modify the mapping array to skip problematic apps temporarily
