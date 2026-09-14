const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const http = require('http');

const rootDir = path.join(__dirname, '..');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '/bake.html') {
    reqPath = '/scripts/bake.html';
  }

  const filePath = path.join(rootDir, reqPath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + reqPath);
      return;
    }
    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.glb') contentType = 'model/gltf-binary';
    if (ext === '.js' || ext === '.mjs') contentType = 'application/javascript';
    if (ext === '.json') contentType = 'application/json';
    res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
    res.end(data);
  });
});

server.listen(4321, async () => {
  console.log('Bake server running on http://localhost:4321');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  page.setDefaultTimeout(0);

  page.on('console', (msg) => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', (err) => console.error('BROWSER ERROR:', err.message));

  // Bake Sedan 36 Frames
  console.log('Baking Sedan 360 frames...');
  fs.mkdirSync(path.join(rootDir, 'public/vehicles/sedan'), { recursive: true });
  await page.goto('http://localhost:4321/bake.html?model=/public/models/sedan.glb&frames=36', { timeout: 0 });
  await page.waitForFunction(() => window.__BAKE_READY__ === true, { timeout: 0 });

  const sedanFrames = await page.evaluate(() => window.__FRAMES__);
  for (let i = 0; i < sedanFrames.length; i++) {
    const frameNum = String(i + 1).padStart(2, '0');
    const base64Data = sedanFrames[i].replace(/^data:image\/webp;base64,/, '');
    fs.writeFileSync(
      path.join(rootDir, `public/vehicles/sedan/${frameNum}.webp`),
      base64Data,
      'base64'
    );
  }
  console.log(`Saved ${sedanFrames.length} sedan frames!`);

  // Bake SUV 36 Frames
  console.log('Baking SUV 360 frames...');
  fs.mkdirSync(path.join(rootDir, 'public/vehicles/suv'), { recursive: true });
  const page2 = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  page2.setDefaultTimeout(0);
  page2.on('console', (msg) => console.log('BROWSER LOG:', msg.text()));
  page2.on('pageerror', (err) => console.error('BROWSER ERROR:', err.message));
  await page2.goto('http://localhost:4321/bake.html?model=/public/models/suv.glb&frames=36', { timeout: 0 });
  await page2.waitForFunction(() => window.__BAKE_READY__ === true, { timeout: 0 });

  const suvFrames = await page2.evaluate(() => window.__FRAMES__);
  for (let i = 0; i < suvFrames.length; i++) {
    const frameNum = String(i + 1).padStart(2, '0');
    const base64Data = suvFrames[i].replace(/^data:image\/webp;base64,/, '');
    fs.writeFileSync(
      path.join(rootDir, `public/vehicles/suv/${frameNum}.webp`),
      base64Data,
      'base64'
    );
  }
  console.log(`Saved ${suvFrames.length} SUV frames!`);

  await browser.close();
  server.close();
  console.log('Turntable baking completed successfully!');
  process.exit(0);
});
