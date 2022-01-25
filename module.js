

const names = module.require(__dirname+'/1-names.js')
const sayHi = module.require(__dirname+'/2-utils.js')
const data = module.require(__dirname+'/alternative-flavor.js')
module.require(__dirname+'/mind-genrade.js')
console.log(data)
sayHi(names.muneeb)