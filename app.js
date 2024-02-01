
const names = require("./data")
const sayHello = require("./actions")
const studentDataBase = require("./studentData")

sayHello("Yagnam")
sayHello(names.name1)
sayHello(names.name2)

console.log(studentDataBase)
