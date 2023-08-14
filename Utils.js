const fs = require('fs');
const { nextTick } = require('process');


function printData(err,data) {
    if (err) throw err;
    console.log(data)
}

function countWords(err, data) {
    if (err) throw err;
    let count = 1;
    for (let i = 0; i < data.length; i++) {
        let char = data[i];
        let prevChar = data[i-1];
        let nextChar = data[i+1];
        if (char !== " ") {
            if (prevChar === " "||nextChar ==="."||prevChar === undefined||nextChar=== undefined) {
                count++;
            }
        }
    }
    console.log(count);
}

fs.readFile("data.text","utf-8", countWords)