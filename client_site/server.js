const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'application/javascript';
        case '.json':
            return 'application/json';
        case '.png':
            return 'image/png';
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        case '.ico':
            return 'image/x-icon';
        case '.svg':
            return 'image/svg+xml';
        default:
            return 'application/octet-stream';
    }
}

// Fixed function name + typo in 404
function serveStaticFile(filePath, res, contentType, statusCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('File read error:', err);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Internal Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0];
    if (urlPath.endsWith('/') && urlPath !== '/') {
        urlPath = urlPath.slice(0, -1);
    }
    urlPath = urlPath.toLowerCase();

    const publicDir = path.join(__dirname, 'public');
    const htmlDir = path.join(publicDir, 'html');

    let filePath;
    let contentType;

    if (urlPath === '/' || urlPath === '/index') {
        filePath = path.join(htmlDir, 'index.html');
        contentType = 'text/html';
    } else if (urlPath === '/about') {
        filePath = path.join(htmlDir, 'about.html');
        contentType = 'text/html';
    } else if (urlPath === '/contact') {
        filePath = path.join(htmlDir, 'contact.html');
        contentType = 'text/html';
    } else {
        filePath = path.join(publicDir, urlPath);
        contentType = getContentType(filePath);
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            const notFoundPath = path.join(htmlDir, '404.html');
            fs.stat(notFoundPath, (err404, stats404) => {
                if (err404 || !stats404.isFile()) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404: Page Not Found</h1>');
                } else {
                    serveStaticFile(notFoundPath, res, 'text/html', 404);  // Fixed 'tet/html'
                }
            });
        } else {
            serveStaticFile(filePath, res, contentType, 200);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
