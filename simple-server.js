const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the main voting portal
app.use(express.static(path.join(__dirname, 'tessellation-vote-portal', 'dist')));

// Serve other components if they exist
app.use('/login', express.static(path.join(__dirname, 'shield-tesseract-access-portal', 'out')));
app.use('/admin', express.static(path.join(__dirname, 'furys-war-room-console', 'out')));
app.use('/leaderboard', express.static(path.join(__dirname, 'tesseract-hall-of-heroes', 'out')));
app.use('/user', express.static(path.join(__dirname, 'marvel-tesseract-dashboard', 'out')));

// Fallback to main portal for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'tessellation-vote-portal', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Tesseract 2025 server running on http://localhost:${PORT}`);
  console.log(`📊 Main voting portal: http://localhost:${PORT}`);
  console.log(`🔐 Login portal: http://localhost:${PORT}/login`);
  console.log(`⚡ Admin console: http://localhost:${PORT}/admin`);
  console.log(`🏆 Leaderboard: http://localhost:${PORT}/leaderboard`);
  console.log(`👤 User dashboard: http://localhost:${PORT}/user`);
});
