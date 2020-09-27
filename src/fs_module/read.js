const fs = require('fs');
const path = require('path');

fs.open(path.join(__dirname, '../../.gitignore'), 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    let readBuffer = new Buffer.alloc(1024);
    const offset = 0;
    const length = readBuffer.length;
    const position = 100;
    fs.read(fd, readBuffer, offset, length, position, (err, bytesRead) => {
        if (err) {
            return console.error(err);
        }
        console.log(`total read ${bytesRead} bytes`);
        console.log('has saved: ', readBuffer.slice(0, bytesRead));
    })
})