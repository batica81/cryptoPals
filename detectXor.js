// 04. Detect single-character XOR
const fs = require('node:fs');
const { testKeys } = require('./unXor')

let cryptArray;

try {
    const data = fs.readFileSync('4.txt', 'utf8');
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

console.log(allResultsEver)

// {
//     "cypherText": "7b5a4215415d544115415d5015455447414c155c46155f4058455c5b523f",
//     "fullKey": "353535353535353535353535353535353535353535353535353535353535",
//     "testBuffer": "4e6f77207468617420746865207061727479206973206a756d70696e670a",
//     "score": 660.33,
//     "asciiValue": "Now that the party is jumping\n"
// }
