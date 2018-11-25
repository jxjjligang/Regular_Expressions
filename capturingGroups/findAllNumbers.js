'use strict'
let alert = console.log;

let reg = /-?\d+(\.\d+)?/g;

let str = "-1.5 0 2 -123.4.";

alert(str.match(reg)); // -1.5, 0, 2, -123.4