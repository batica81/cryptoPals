
function hexToBase64(inputString) {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

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

    let chunks = [];

    for (var j = 0, charsLength = binaryResult.length; j < charsLength; j += 6) {
        chunks.push(parseInt(binaryResult.substring(j, j + 6),2));
    }

    console.log(chunks)

    let finalString = '';

    for (const element of chunks) {
        finalString += alphabet[element]
    }

    console.log(finalString)

    return finalString;

}

hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')

// should be: SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t



