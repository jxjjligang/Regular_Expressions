'use strict'
let alert = console.log;

let reg = /\d+(\.\d*)?/g;

let str = "1.5 0 12. 123.4.";
// let str = "1.5 0 12. 123.4. -12 .23";

alert(str.match(reg));   // 1.5, 0, 12, 123.4