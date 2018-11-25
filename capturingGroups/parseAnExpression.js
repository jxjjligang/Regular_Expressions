'use strict'
let alert = console.log;

let expressions = ['1 + 2', '1.2 * 3.4', '-3 / -6', '-2 - 2']
expressions.forEach(expression => {
    let parseResult = parse(expression);
    let a = parseResult.a, op = parseResult.op, b = parseResult.b;
    alert(expression);
    alert(a); // 1.2
    alert(op); // *
    alert(b); // 3.4
    alert('\n');
});

function parse(str) {
    let result = str.match(/(-?\d+(\.?\d+)?)\s*([+*/-])\s*(-?\d+(\.?\d+)?)/);
    return {
        a: result[1],
        op: result[3],
        b: result[4]
    };
}