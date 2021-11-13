require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure silver blame dash museum comic coral light army gaze'; 
let testAccounts = [
"0x77dbb947620533500776071fb0d89ea952cf7dd3546ba2fb937e4d852a1f0524",
"0x5e782d5ca7ab5fd94e0698449e574aea5623283a9b4a3051367e03c9472e8761",
"0xd59b498e934a8448a1ea6279b4ede06d8bd3ae79510bcf68cb19420a2b2a5e45",
"0x80a955d5d0d1699fafa2ce8b6f45f0ecdcac11b71de8dcc304d83051a11d8f5d",
"0x11a87eac2ff4873035a5cdadcc4efb2145ddfe0efa0709b47e8ec5c496d3c6ac",
"0xfc60305b58b5c063caf68046170e6e8d869ada84cf4e6f9a3d6ff7b985015969",
"0xe256f3a1d85c1dd616103d75ee2992bbcc875a4da199ef68ae6ed93952d8e903",
"0x7a5f315716690d80bfc3efbbad711acd371ef75676f74301cd22c9406c9fd71c",
"0xb80c6c556def03c214cc36a15ef2276fe91723971da9337a0c4254fe25c0a106",
"0xfe70bd85c057f44ce59412108d31145b1992ee393adbea3358d7f95cfb8b8f6e"
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
            gas: 8000000,
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


