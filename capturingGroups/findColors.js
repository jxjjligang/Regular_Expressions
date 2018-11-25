'use strict'
let alert = console.log;

let reg = /#[\da-f]{3}([\da-f]{3})?/gi;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert(str.match(reg)); // #3f3 #AA0ef