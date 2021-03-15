const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

caver.rpc.klay.getClientVersion().then(console.log)
