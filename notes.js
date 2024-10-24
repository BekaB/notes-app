const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes = () =>{
    const mes = "your notes ..."
    return mes
}

const addNote = (title,body) =>{
    const notes = loadNotes()
//    const duplicatedNotes = notes.filter((note)=> note.title === title)
    const duplicatedNotes = notes.find((note)=> note.title === title)

    if(!duplicatedNotes){
        notes.push({
        title: title,
        body: body
    })
    saveNoes(notes)
    console.log(chalk.bgGreen('New Notes added'))
    } else {
        console.log(chalk.bgRed("note tilte taken"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteExists = notes.filter((note) => note.title != title)
    saveNoes(noteExists)
    notes.length !== noteExists.length ? console.log(chalk.bgGreen.bold('Notes Deleted')) : console.log(chalk.bgRed.bold('No Note Deleted'))
    // console.log('notes to be deleted ' + title)
}

const saveNoes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return[]
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.bgGreen("your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    });
    //notes.filter((note) => console.log(note.title))

}

const readNotes = (title) => {
    const notes = loadNotes()
    const titleFound = notes.find((note) =>  note.title === title );
    if(titleFound){
        console.log(chalk.bgGreen(titleFound.title))
        console.log(titleFound.body)
    } else{
        console.log("note not found")
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}