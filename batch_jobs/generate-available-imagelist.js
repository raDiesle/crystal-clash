var read = require('fs-readdir-recursive');

const filePaths = read("public/generated/img");

console.log(JSON.stringify(filePaths, null, 2));