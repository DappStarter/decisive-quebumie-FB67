require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind concert grace beauty forget spirit'; 
let testAccounts = [
"0x2e016a2fc7b2ac3fae5b8eae0910381725c4dbbed93c761e2fcb8defed7308bf",
"0x68ae96ff2d9f6c6187e0484d72fafa360971f089bc976ac3531733bf26bddb4a",
"0x6edbba50f529e6b9409713722caf01b33cbb390363115b58d121179b272ae0c8",
"0xac3dda90dc028c96d8265a02158c699365ee0f694fff852d351b6f343edf2391",
"0x3c56d687bcdecf63130933d0287a8bf379ef48241beac71dec42c81f3094e8ce",
"0xfec6851f16e0eb07257a46de0678afb7b86b4342795b178a3e4196aa49cdcecf",
"0xb362d89acc70e5c69b143a8289e46c1e3b9df35fe3181dbb0e6e6dffdf53deef",
"0xdc1c7d459153e3ac30d9fbff7335b8c8939021010d2fb9cc77322646ed0e6717",
"0x8d53b7319676ae8963905d1947a7a63bfc48d7747abbcb255a05868bb527fa4b",
"0xe5ab37637fd2f1f4653d1f08a3e8bc78bf11f71885c28f86a9122a3fd0e2d2b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


