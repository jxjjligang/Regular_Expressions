let alert = console.log;

let reg = /(?:[^\\])".+?[^\\]"/;

let str = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';

// the in-memory string
let result = str.match(reg), index = 0;
for (let r of result)
    alert(`index:${index++}, matched result:${r}`); //  .. "test me" .. "Say \"Hello\"!" .. "\\ \"" ..