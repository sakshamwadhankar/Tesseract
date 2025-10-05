const fs = require('fs');
const path = require('path');

// Folders to process
const folders = [
  'tessellation-vote-portal',
  'shield-tesseract-access-portal',
  'avenger-vote-vault',
  'furys-war-room-console',
  'tesseract-hall-of-heroes',
  'hydra-glitch-hax'
];

// Process each folder
folders.forEach(folder => {
  const indexPath = path.join(__dirname, folder, 'index.html');
  
  // Skip if file doesn't exist
  if (!fs.existsSync(indexPath)) {
    console.log(`Skipping ${indexPath} - file not found`);
    return;
  }
  
  // Read the file
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Fix 1: Remove type="module" from script tags
  content = content.replace(/<script type="module"/g, '<script');
  
  // Fix 2: Add charset meta tags if missing
  if (!content.includes('<meta charset="UTF-8"')) {
    content = content.replace('<head>', '<head>\n    <meta charset="UTF-8" />');
  }
  
  if (!content.includes('<meta http-equiv="Content-Type"')) {
    content = content.replace('<head>', '<head>\n    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">');
  }
  
  // Write the updated content back
  fs.writeFileSync(indexPath, content);
  console.log(`Fixed ${indexPath}`);
});

// Remove .gitmodules file if it exists
const gitmodulesPath = path.join(__dirname, '.gitmodules');
if (fs.existsSync(gitmodulesPath)) {
  fs.unlinkSync(gitmodulesPath);
  console.log('Removed .gitmodules file');
}

console.log('All fixes applied successfully!');