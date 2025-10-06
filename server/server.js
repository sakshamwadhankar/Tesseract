const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const SITE_DIR = path.join(process.cwd(), 'site');

app.use(express.static(SITE_DIR, { extensions: ['html'], index: ['index.html'] }));

app.get('*', (req, res, next) => {
  const clean = path.join(SITE_DIR, req.path, 'index.html');
  res.sendFile(clean, (err) => { if (err) next(); });
});

app.listen(PORT, () => {
  console.log(`Static site on http://localhost:${PORT}`);
});
