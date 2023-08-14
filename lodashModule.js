const fs = require('fs');
const _lodash = require('lodash');


function reverseData(err, data) {
    if (err) throw err;
    console.log(data);
    let strData = "";
    let arrData = [];
    for (let i=0; i < data.length; i++) {
        arrData.push(data[i]);
    }
    _lodash.reverse(arrData);
    for (let i = 0; i < arrData.length; i++) {
        strData += arrData[i];
    }
    console.log(strData);
}

function noDoubles(err, data) {
    if (err) throw err;
    let arrData = [];
    const uniqArr = [];
    let strData = "";
    for (let i =0; i< data.length; i++) {
        arrData.push(data[i]);
    }
    _lodash.uniq(arrData);
    for (let i =0; i< arrData.length; i++) {
        strData += uniqArr[i];
    }
    console.log(strData);
}

// module.exports = reverseData;
// module.exports = noDoubles;

fs.readFile("data.text","utf-8", noDoubles)

