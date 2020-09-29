const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../../.gitignore'), (err, data) => {
    if (err) {
        return console.error(err);
    }
    fs.writeFile('testWrite.txt', data, (err) => {
        if (err) {
            return console.error(err);
        }
    })
});