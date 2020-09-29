/**
 * @file 从json中读取ip并获得对应城市及天气并写入新的json
 */

const got = require('got');
const fs = require('fs');
const path = require('path');

/**
 * 读取文件中的ip
 * @param {*} path 路径
 * @param {*} callback 回调函数
 */
function readIp(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
        } else {
            try {
                data = JSON.parse(data);
                callback(null, data);
            } catch (error) {
                callback(error);
            }
        }
    });
}

/**
 * 
 * @param {*} ip ip地址
 * @param {*} callback 
 */
async function ip2geo(ip, callback) {
    try {
        const response = await got('https://www.telize.com/geoip/' + ip);
        console.log(response);
    } catch (error) {
        callback(error);
    }
}

function start() {
    const ipJsonPath = path.join(__dirname, './ip.json');
    readIp(ipJsonPath, (err, ipList) => {
        if (err) {
            return console.error(err);
        }
        ipList.forEach(ip => ip2geo(ip, (error) => {
            if (error) {
                return console.error(error);
            }
        }))
    })
}

start();