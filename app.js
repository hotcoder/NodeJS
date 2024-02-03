/*
const names = require("./data")
const sayHello = require("./actions")
const studentDataBase = require("./studentData")

sayHello("Yagnam")
sayHello(names.name1)
sayHello(names.name2)

console.log(studentDataBase)
*/

const os = require('os')

console.log(os.userInfo());

const osDetails = {
    osName : os.type(),
    osRelease : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
}

console.log(osDetails);