const utf8 = require('utf8');

// const enc = utf8.encode("hello");
// https://www.crockford.com/base32.html

function encode64(str) {
    return window.btoa(str);
}

function encode32(str) {
    return str.split("")
            .map(c => c.charCodeAt(0).toString(32).toUpperCase().padStart(2,"0"))
            .join("");
}

function encode16(str) {
   return str.split("")
            .map(c => c.charCodeAt(0).toString(16).toUpperCase().padStart(2,"0"))
            .join("");
}

function encode8(str) {
    return str.split("")
    .map(c => c.charCodeAt(0).toString(8).toUpperCase().padStart(2,"0"))
    .join("");
}




module.exports = {encode8,encode16,encode32,encode64};