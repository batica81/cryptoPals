// 03 Single-byte XOR cipher

const { xorBuffers } = require('./xorBuffers')

let cypherText = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

let scoring =
    {
        "41": 43.31,
        "42": 10.56,
        "43": 23.13,
        "44": 17.25,
        "45": 56.88,
        "46": 9.24,
        "47": 12.59,
        "48": 15.31,
        "49": 38.45,
        "50": 16.14,
        "51": 1,
        "52": 38.64,
        "53": 29.23,
        "54": 35.43,
        "55": 18.51,
        "56": 5.13,
        "57": 6.57,
        "58": 1.48,
        "59": 9.06,
        "4A": 1,
        "4B": 5.61,
        "4C": 27.98,
        "4D": 15.36,
        "4E": 33.92,
        "4F": 36.51,
        "5A": 1.39,

        "61": 43.31,
        "62": 10.56,
        "63": 23.13,
        "64": 17.25,
        "65": 56.88,
        "66": 9.24,
        "67": 12.59,
        "68": 15.31,
        "69": 38.45,
        "70": 16.14,
        "71": 1,
        "72": 38.64,
        "73": 29.23,
        "74": 35.43,
        "75": 18.51,
        "76": 5.13,
        "77": 6.57,
        "78": 1.48,
        "79": 9.06,
        "6A": 1,
        "6B": 5.61,
        "6C": 27.98,
        "6D": 15.36,
        "6E": 33.92,
        "6F": 36.51,
        "7A": 1.39
    }

let finishedResult = []

function testKeys(cypherText) {
    let result = [];
    for (let i = 0; i < 256; i++) {
        let testKey = i.toString(16).padStart(2, '0')
        // console.log(testKey)

        let fullKey = '';

        for (let i = 0; i < cypherText.length /2; i++) {
            fullKey += testKey;
        }
        // console.log(fullKey)

        result.push(analyzeResult(xorBuffers(cypherText, fullKey), fullKey, cypherText))

    }

    result.sort((a, b) => a.score - b.score)
    result = result.filter(function( element ) {
        return element !== undefined;
    });
    return result


}


function analyzeResult(testBuffer, fullKey, cypherText) {
    // let cypherText = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';


    let score = 0;

    for (let i = 0; i < testBuffer.length; i+=2) {
        let tmpChar = (testBuffer[i] + testBuffer[i + 1]).toUpperCase();
        // console.log(scoring[tmpChar])
        if (scoring[tmpChar] !== undefined) {
            score += scoring[tmpChar]
        }

    }

    if (score > 0) {

        let oneResult = {
            "cypherText" : cypherText,
            "fullKey" : fullKey,
            "testBuffer" : testBuffer,
            "score" : score,
            "asciiValue": hexToAscii(testBuffer)
        }

       // finishedResult.push(oneResult);

        // console.log(oneResult)

        return oneResult;


    } else {
        return undefined;
    }

}

function hexToAscii(str){
    let hexString = str;
    let strOut = '';
    for (x = 0; x < hexString.length; x += 2) {
        strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
    }
    return strOut;
}

// testKeys(cypherText)

// finishedResult.sort((a, b) => a.score - b.score)


// console.log(finishedResult)

module.exports = { testKeys }


// {
//     "cypherText": "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736",
//     "fullKey": "58585858585858585858585858585858585858585858585858585858585858585858",
//     "testBuffer": "436f6f6b696e67204d432773206c696b65206120706f756e64206f66206261636f6e",
//     "score": 46.26,
//     "asciiValue": "Cooking MC's like a pound of bacon"
// }
