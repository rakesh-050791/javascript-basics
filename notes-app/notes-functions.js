// Read existing notes from local storage

const getSavedNotes = function() {

    //check for existing saved data
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON != null) {
        return  JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localstorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}


// Generate a DOM structure for a note 
const generateNoteDom = function(note) {
    const noteEl = document.createElement('div')
    const textEL = document.createElement('span')
    const button = document.createElement('button')

    //setup the remove note button
    button.textContent = 'X'
    noteEl.appendChild(button)

    //setup the note title text
    if (note.title.length > 0) {
        textEL.textContent = note.title
    } else {
        textEL.textContent = 'Unnamed Note'
    }

    noteEl.appendChild(textEL)
    return noteEl
}

// Render application notes
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note) {
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}