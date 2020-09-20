console.time('total time')
const strA = 'node.js';
const strB = 'is';
const strC = 'best!';
console.log(strA, strB, strC);
console.time('time 2');
const objD = {
    a: 'new',
    b: () => 'b',
    c: [1, 2]
};
console.dir(objD)
console.timeEnd('time 2');
console.timeEnd('total time');