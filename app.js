const fs = require('fs');
// const _lodash = require('lodash')

const printData = require("./Utils");
const countWords = require("./Utils");
const reverseData = require("./lodashModule");

fs.readFile("data.text","utf-8", printData);
fs.readFile("data.text","utf-8", countWords);
fs.readFile("data.text","utf-8", reverseData);
