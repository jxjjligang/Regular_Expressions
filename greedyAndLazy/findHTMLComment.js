'use strict'
let alert = console.log;

let reg = /<!--[^>]*>/g;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert( str.match(reg) ); // '<!-- My -- comment \n test -->', '<!---->'