const { add, mul } = require("./a.js");
const _ = require("lodash");
//解构
// const opts = require("./a.js");
// const add = opts.add;
// const mul = opts.mul;

const sum = add(10,30);
const result = mul(100, 200);

// console.log(sum);
// console.log(result);

const arr = _.concat([1, 2], 3);
console.log(arr);