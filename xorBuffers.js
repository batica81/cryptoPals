// 02 Fixed XOR
// Write a function that takes two equal-length buffers and produces their XOR combination.

const { hexToBinary, binaryToHex } = require('./base64.js')

function xorBuffers(buf1, buf2) {

    let binary1 = hexToBinary(buf1)
    // console.log(binary1);

    let binary2 = hexToBinary(buf2)
    // console.log(binary2);

    // console.log('should be:')
    // let binary3 = hexToBinary('746865206b696420646f6e277420706c6179');
    // console.log(binary3);
    // console.log(binaryToHex(binary3));

    // console.log('we got')
    let result = manualBinaryXor(binary1, binary2);
    // console.log(result);
    console.log(binaryToHex(result));
    return binaryToHex(result);
}

function manualBinaryXor(bin1, bin2) {
    let result = '';
    bin1 = bin1.split('');
    bin2 = bin2.split('');

    if (bin1.length !== bin2.length) {
        throw new Error('Buffers must be the same length');
    }
    for (let i = 0; i < bin1.length; i++) {
        let tmpRes = '';
        if (bin1[i] === '0' && bin2[i] === '0') {
            tmpRes = '0';
        } else if (bin1[i] === '1' && bin2[i] === '1') {
            tmpRes = '0';
        } else {
            tmpRes = '1';
        }
        result += tmpRes;
    }
    return result;
}



// xorBuffers('1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'); // 746865206b696420646f6e277420706c6179

module.exports = { xorBuffers }
