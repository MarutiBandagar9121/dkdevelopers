require('dotenv').config();
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const port = 4000;
const dev = process.env.NODE_ENV !== 'production';
console.log('dev', dev);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});