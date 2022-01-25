
const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`Uptime is ${os.uptime/(60*60)}`)

const osinfo = {
    version: os.version(),
    freeMem: os.freemem()/(1024*1024),
    totalMem: os.totalmem()/(1024*1024),
    name: os.type(),
    rel: os.release()
}
console.log(osinfo)