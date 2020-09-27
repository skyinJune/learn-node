const fs = require('fs');
const path = require('path');

fs.open(path.join(__dirname, 'index.js'), 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log('open success');
})