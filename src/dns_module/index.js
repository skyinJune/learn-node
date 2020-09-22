const dns = require('dns');

const domain = 'baidu.com';

dns.resolve(domain, (err, address) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(address);
})