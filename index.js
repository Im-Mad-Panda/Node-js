const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

console.log(2 + 2);
console.log("hellow node!");

const c = new Component();
c.render();

const res = MyMath.sum(3, 3);
console.log(res);
