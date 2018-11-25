'use strict'
let alert = console.log;

let reg = /\[(b|url|quote).+\/\1\]/gm;

let strings = ["[b]text[/b]", "[url]http://google.com[/url]", "..[url]http://google.com[/url]..",
    `Normal:
[url] [b]http://google.com[/b] [/url]
[quote] [b]text[/b] [/quote]`];

strings.forEach(s => {
    console.log(`Source: ${s}`);
    console.log(`Result: ${s.match(reg)}\n`);
});