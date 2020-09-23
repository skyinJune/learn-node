/**
 * @file 文件系统
 */
const fs = require('fs');
const path = require('path');

// 使用 path.join 链接多个路径
fs.stat(path.join(__dirname, '..', 'helloworld/index.js'), (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stats);
    // stats还有许多方法来判断当前读取的属性
    console.log(stats.isFile())
});