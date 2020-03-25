

const fs = require('fs')
// console.log(fs)
let str=fs.readFileSync(process.argv[2]).toString().split('\n').length
console.log(str-1)