const util = require('util');

const obj = {
    a: 'test string',
    b: 1,
    c: {}
};
console.log(util.inspect(obj, {colors: true}));

console.log(util.format('%s is %d %s', 'age', 12, 'years'));