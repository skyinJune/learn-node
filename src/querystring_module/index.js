const querystring = require('querystring');

// const reqQS = 'q1=1&q2=str&q3=a';
// console.log(querystring.parse(reqQS));

const reqObj = { q1: '1', q2: 'str', q3: 'a' };
console.log(querystring.stringify(reqObj));