const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
// const { describe } = require('yargs')

const command = process.argv[2]

// if (command === 'add'){
//     console.log('adding note!')
// } else if (command === 'remove'){
//     console.log('Removing note!')
// }
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'adding a note',
    handler: function(){
        console.log('adding a note with args')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing with args')
    }
})

yargs.command({
    command: 'list',
    describe: 'this is the list',
    handler: function(){
        console.log('this is the list args')
    }
})

yargs.command({
    command: 'read',
    describe: 'this is reading part ',
    handler: function(){
        console.log('i am reading with args')
    }
})



console.log(yargs.argv)






// const add = require('./utils.js')

// const sum = add(9,5)

// console.log(sum)