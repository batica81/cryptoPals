// 03 Single-byte XOR cipher

const { xorBuffers } = require('./xorBuffers')

let cypherText = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

for (let i = 0; i < 256; i++) {
    let testKey = i.toString(16).padStart(2, '0')
    // console.log(testKey)

    let fullKey = '';

    for (let i = 0; i < cypherText.length /2; i++) {
        fullKey += testKey;
    }
    // console.log(fullKey)

    xorBuffers(cypherText, fullKey)

}

function analyzeResult(testBuffer) {
    let score = 0;

    return testBuffer + '_score: ' + score;
}
