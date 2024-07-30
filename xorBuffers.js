
function xorBuffers(buf1, buf2) {

    let dec1 = BigInt(parseInt(buf1, 16));
    console.log(dec1);
    let binary1 = dec1.toString(2);
    binary1 = binary1.padStart(binary1.length + (8 - (binary1.length % 8)), '0');
    console.log(binary1);

    let dec2 = BigInt(parseInt(buf2, 16));
    console.log(dec2);
    let binary2 = dec2.toString(2);
    binary2 = binary2.padStart(binary2.length + (8 - (binary2.length % 8)), '0');
    console.log(binary2);

    console.log('should be:')
    let dec3 = BigInt(parseInt('746865206b696420646f6e277420706c6179', 16));
    let binary3 = dec3.toString(2);
    binary3 = binary3.padStart(binary3.length + (8 - (binary3.length % 8)), '0');
    console.log(binary3);

    console.log('we got')

    let result = manualBinaryXor(binary1, binary2);
    console.log(result);

    console.log(parseInt(result, 2).toString(16));
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



xorBuffers('1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'); // 746865206b696420646f6e277420706c6179
