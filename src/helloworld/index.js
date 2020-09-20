const http = require('http');
const port = 8090;

/**
 * 方法1生成http server
 */
// const server = http.createServer((req, res) => {
//     res.end('hello world');
// });

// server.listen(port, () => {
//     console.log(`node server listening at: http://localhost:${port}`);
// });

/**
 * 方法2生成http server
 */
const server = http.createServer();
server.on('request', (req, res) => {
    let data = '';
    // 监听data
    req.on('data', chunk => {
        console.log('chunk: ', chunk);
        data += chunk;
    });
    req.on('end', () => {
        const reqMethod = req.method;
        const reqHeaders = JSON.stringify(req.headers);
        const reqUrl = req.url;
        const reqHTTPVersion = req.httpVersion;
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        const htmlContent = `
            <p>data: ${data}</p>
            <p>reqMethod: ${reqMethod}</p>
            <p>reqHeaders: ${reqHeaders}</p>
            <p>reqUrl: ${reqUrl}</p>
            <p>reqHTTPVersion: ${reqHTTPVersion}</p>`;
        res.end(htmlContent);
    });
})
server.listen(port, () => {
    console.log(`node server listening at: http://localhost:${port}`);
});