const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body:{
            describe: 'This Is Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe:"notes title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'this is the list',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'this is reading part ',
    builder: {
        title: {
            describe: "title of the note",
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        //console.log('i am reading with args')
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)