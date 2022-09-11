//os module

const os = require('os')//no moe ./

//info abut current user
const user =os.userInfo()

console.log(user)

//method return the system ptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS={
  name:os.type(),
  release: os.release(),
  totalMem:os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)