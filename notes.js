const fs = require('fs')

const getNotes = function(){
    const mes = "your notes ..."
    return mes
}

const addNote = function(title,body){
    const notes = loadNotes()
    const duplicatedNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicatedNotes.length === 0){
        notes.push({
        title: title,
        body: body
    })
    saveNoes(notes)
    console.log('New Notes added')
    } else {
        console.log("note tilte taken")
    }

}

const saveNoes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return[]
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}