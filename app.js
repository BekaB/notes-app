const chalk = require('chalk')
const validator = require('validator')
const message = require('./notes.js')

console.log(message())

console.log(validator.isEmail('ehak@gmail.com'))
console.log(chalk.green.bgGreen('Life is Green '+ chalk.blue.bold.bgRed(' Red Bg with bold text ')))










// const add = require('./utils.js')

// const sum = add(9,5)

// console.log(sum)