const {ethers} = require('ethers');

const wallet = ethers.Wallet.createRandom();
console.log('random wallet:',wallet);

const privateKey = wallet.privateKey;
console.log('Private key:', privateKey);

const address = wallet.address;
console.log('My ethereum address:',address);


const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const keyPair = ec.keyFromPrivate(privateKey);

const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::',myPublicKey);

const uncompressedKey = keyPair.getPublic().encode('hex'); // 비압축 형식으로 변환
console.log('Uncompressed public key (elliptic):', uncompressedKey);
