const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

if (command === 'add'){
    console.log('adding note!')
} else if (command === 'remove'){
    console.log('Removing nort!')
}











// const add = require('./utils.js')

// const sum = add(9,5)

// console.log(sum)