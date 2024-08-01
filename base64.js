// 01 Convert hex to base64

function hexToBinary(inputString) {
    inputString = inputString.toLowerCase();

    if (inputString.length % 2 !== 0) {
        throw new Error("Invalid hex string");
    }
    let binaryResult = '';

    for (let i = 0; i < inputString.length; i = i + 2) {
        // getting decimal values of hex characters
        let low = parseInt(inputString[i], 16)
        let high = parseInt(inputString[i+1], 16)

        // converting decimal values to binary
        let lowBinary = low.toString(2).padStart(4, '0')
        let highBinary = high.toString(2).padStart(4, '0')

        // appending binary values
        binaryResult += lowBinary + highBinary

    }
    // console.log(binaryResult)

    return binaryResult;

}

function binaryToHex(inputString) {
    if (inputString.length % 8 !== 0) {
        throw new Error("Invalid binary string");
    }
    let hexResult = '';

    let chunks = [];

    for (let j = 0; j < inputString.length; j += 4) {
        chunks.push((parseInt(inputString.substring(j, j + 4),2)).toString(16));
    }

    // console.log(chunks.join(''));
    return chunks.join('');

}
function hexToBase64(inputString) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    let binaryResult = hexToBinary(inputString);
    let chunks = [];

    for (let j = 0; j < binaryResult.length; j += 6) {
        chunks.push(parseInt(binaryResult.substring(j, j + 6),2));
    }
    // console.log(chunks)
    let finalString = '';

    for (const element of chunks) {
        finalString += alphabet[element]
    }
    // console.log(finalString)
    return finalString;
}

function base64toHex(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    let binResult = '';

    for (const element of str) {
        binResult += alphabet.indexOf(element).toString(2).padStart(6, '0');
    }

   // console.log(binaryToHex(binResult))
    return binaryToHex(binResult)

}




// hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')

// should be: SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

// binaryToHex('011101000110100001100101001000000110101101101001011001000010000001100100011011110110111000100111011101000010000001110000011011000110000101111001')

module.exports = { hexToBinary, binaryToHex, base64toHex}
