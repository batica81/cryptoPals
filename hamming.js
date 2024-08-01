
const fs = require('node:fs');

const { asciiToHex } = require('./unXor')
const { hexToBinary, binaryToHex } = require('./base64.js')
const {base64toHex} = require("./base64");

let cryptArray;

try {
    const data = fs.readFileSync('6.txt', 'utf8');
    cryptArray = data.split('\n');

} catch (err) {
    console.error(err);
}


function calcBitDistance(str1, str2) {
    if (str1.length !== str2.length) {
        throw new Error('Strings must be of the same length');
    }

    // input is ascii
    // str1 = hexToBinary(asciiToHex(str1));
    // str2 = hexToBinary(asciiToHex(str2));

    // input is hex
    str1 = hexToBinary(str1);
    str2 = hexToBinary(str2);

    let score = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            score++;
        }
    }
    return score;

}


function guessKeyLenth(cypherText) {
    cypherText = base64toHex(cypherText);

    for (let keyLength = 2; keyLength < 44; keyLength+=2) {
        let tmpScore = 0;
        let subString1 = cypherText.substring(0, keyLength);
        let subString2 = cypherText.substring(keyLength, keyLength * 2);

        tmpScore = calcBitDistance(subString1, subString2)/keyLength;
        console.log('keyLength: ', keyLength/2, 'score: ', tmpScore)
    }

}

cryptArray.forEach(function(element) {
    console.log(element)
    guessKeyLenth(element)
})

// guessKeyLenth('CEEATyBUCHQLHRlJAgAOFlwAUjBpZR9JAgJUAAELB04CEFMBJhAVTQIHAh9P')


// console.log(base64toHex('CEEATyBUCHQLHRlJAgAOFlwAUjBpZR9JAgJUAAELB04CEFMBJhAVTQIHAh9P'))

// console.log(calcBitDistance('this is a test', 'wokka wokka!!!')) // 37 indeed

module.exports = { calcBitDistance }

