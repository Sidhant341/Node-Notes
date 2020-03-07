//const fs = require('fs')

//fs.writeFileSync('notes.txt','Writing to file using Node.js!')

//Challenge 1: Append some text to the file instead of over writing.

//fs.appendFileSync('notes.txt','Appending this to the file!')

//Lecture 2: Importing data from another file

//require('./utils.js')           //Remember the "./", path has to be relative

//const name = 'Sidhant'

//console.log(name)

//Now if we want to import a variable, use module.exports = ______ in the other file

//name = require('./utils.js')

//console.log(name)

//Importing a function:

// const add = require('./utils.js')
// sum = add(5,4)

// console.log(sum)

/*Challenge 2: Create a function in a different file that simply returns a static string. Print
the string here using console.log*/

//RNote = receivedNotes()

// const validator = require('validator')

// console.log(validator.isURL('checkgmail@com'))



// console.log(chalk.green.bold('Success!'))

// console.log(chalk.bold('Trying bold!'))

// console.log(chalk.inverse('Inverse text!'))

const chalk = require('chalk')
const yargs = require('yargs')

const receivedNotes = require('./notes.js')

yargs.version('1.1.0')
//console.log(receivedNotes())

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Body of the note (text)',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        receivedNotes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        receivedNotes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler(){
        receivedNotes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read from a note',
    builder: {
        title: {
            describe: 'Title of note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        receivedNotes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)
