'use strict'
let alert = console.log;

let reg = /\d{2}[-:]\d{2}/g;
alert( "Breakfast at 09:00. Dinner at 21-30".match(reg) ); // 09:00, 21-30