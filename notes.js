const fs = require('fs')
const chalk = require('chalk')

S = 'Your notes...'
const getNotes = () => S


const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if(!duplicateNote) {
        notes.push ( {
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('Note added!'))
    } else {
        console.log(chalk.bgRed('Note title already exists!'))
    }
}

const saveNotes = (notes) => {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.JSON',notesJSON)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const buff = dataBuffer.toString()
        return JSON.parse(buff)
    } catch(e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const newarray = notes.filter((note) => note.title !== title)
    if(newarray.length !== notes.length){
        console.log(chalk.bgGreen('Note removed!'))
    }
    else {
        console.log(chalk.bgRed('No note found!'))
    }
    saveNotes(newarray)
//  console.log('Operation completed!')
}

const listNotes = () => {
    console.log(chalk.bgBlue('Your notes:'))
    notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    notes = loadNotes()
    foundNote = notes.find((note) => note.title === title)
    if(foundNote){
        console.log(chalk.bgCyanBright(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}
module.exports = {
    'getNotes': getNotes,
    'addNote': addNotes,
    'removeNotes': removeNotes,
    'listNotes': listNotes,
    'readNote': readNote
}