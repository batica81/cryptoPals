// 05. Implement repeating-key XOR
//
// Burning 'em, if you ain't quick and nimble
// I go crazy when I hear a cymbal
//
// Encrypt it, under the key "ICE", using repeating-key XOR.
//
// In repeating-key XOR, you'll sequentially apply each byte of the key; the first byte of plaintext will be XOR'd against I, the next C, the next E, then I again for the 4th byte, and so on.
//
// It should come out to:
//
// 0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272
// a282b2f20 430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f
//
// Encrypt a bunch of stuff using your repeating-key XOR function. Encrypt your mail. Encrypt your password file. Your .sig file. Get a feel for it. I promise, we aren't wasting your time with this.

const { xorBuffers } = require('./xorBuffers')
const { asciiToHex } = require('./unXor')

function xorMessage(plainText, key) {
    let fullKey = '';
    plainText = asciiToHex(plainText)
    key = asciiToHex(key)

    for (let i = 0; i < (plainText.length / key.length + 1); i++) {
        fullKey += key;
    }
    fullKey = fullKey.substring(0, plainText.length)

    console.log('plaintext: ', plainText)
    console.log('fullkey:   ', fullKey)

    let mess = xorBuffers(plainText, fullKey)
    return mess
}

console.log('cypherText:', xorMessage("Burning 'em, if you ain't quick and nimble", 'ICE'))
console.log('')
console.log('cypherText:', xorMessage('I go crazy when I hear a cymbal', 'ICE'))

// Actually correct:
//
// plaintext:  4275726e696e672027656d2c20696620796f752061696e277420717569636b20616e64206e696d626c65
// fullkey:    494345494345494345494345494345494345494345494345494345494345494345494345494345494345
// cypherText: 0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20
//
// plaintext:  4920676f206372617a79207768656e2049206865617220612063796d62616c
// fullkey:    49434549434549434549434549434549434549434549434549434549434549
// cypherText: 0063222663263b223f30633221262b690a652126243b632469203c24212425
