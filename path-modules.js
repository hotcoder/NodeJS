const path = require('path')

console.log(path.sep)

const abtPath = path.resolve(__dirname,'actions.js');

console.log(abtPath);

const {readFileSync,writeFileSync} = require('fs')

const file1 = readFileSync('./content/file.txt','utf8');

console.log(file1)

writeFileSync('./content/file2.txt', ` This content is from ${file1} `,{flag:'a'});