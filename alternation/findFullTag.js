let alert = console.log;

let reg = /<style(\b[^>]+)?>/g;

alert('<style> <styler> <style test="...">'.match(reg)); // <style>, <style test="...">