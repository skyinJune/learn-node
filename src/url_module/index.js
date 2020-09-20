const url = require('url');

// const reqUrl = 'https://www.baidu.com/?q=test';
// console.dir(url.parse(reqUrl));

const urlObj = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?q=test',
    query: 'q=test',
    pathname: '/',
    path: '/?q=test',
    href: 'https://www.baidu.com/?q=test'
};
console.log(url.format(urlObj));