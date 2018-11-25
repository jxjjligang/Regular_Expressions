'use strict'

let reg= /Java[^script]/;

console.log('Java'.match(reg));

console.log('JavaScript'.match(reg));

console.log('JavaScript'.match( /Java[^script]/i));