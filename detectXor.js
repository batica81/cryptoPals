const fs = require('node:fs');
const { testKeys } = require('./unXor')

let cryptArray;

try {
    const data = fs.readFileSync('5.txt', 'utf8');
    cryptArray = data.split('\n');

} catch (err) {
    console.error(err);
}

let resArray = []

cryptArray.map(crypt => {
    if (crypt !== '') {
        resArray.push(testKeys(crypt))

    }
})


let allResultsEver = []

resArray.forEach(function(element) {
    element.forEach(function(el) {
        allResultsEver.push(el)
    })
})


allResultsEver.sort((a, b) => a.score - b.score)

console.log('resArray')

// {
//     "cypherText": "7b5a4215415d544115415d5015455447414c155c46155f4058455c5b523f",
//     "fullKey": "151515151515151515151515151515151515151515151515151515151515",
//     "testBuffer": "6e4f57005448415400544845005041525459004953004a554d50494e472a",
//     "score": 539.62,
//     "asciiValue": "nOW\u0000THAT\u0000THE\u0000PARTY\u0000IS\u0000JUMPING*"
// }
// nOW THAT THE PARTY IS JUMPING*
