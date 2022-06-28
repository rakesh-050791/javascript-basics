const notes = [ 
    {
        title: 'My next trip',
        body: 'I would like to go to India'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise, Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]


// DOM - Document object model

// Query & remove
// const p = document.querySelector('p')

// p.remove()


// Query all & remove 
// const ps = document.querySelectorAll('p')
// ps.forEach(function(p) {
//     // p.remove()
//     // console.log(p.textContent)
//     p.textContent += '**'
//     console.log(p.textContent)
// })



// // Add new element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is new element from JS'

// document.querySelector('body').appendChild(newParagraph)

const filters = {
    searchText: ''
}

//    localStorage.setItem('location', 'Delhi')        // C
//    console.log(localStorage.getItem('location'))    // R
//    localStorage.setItem('location', 'Austria')      // U
//    localStorage.removeItem('location')              // D

//    localStorage.clear() // Will delete everything from localstorage irrespective of key

// const user = {
//     name: 'Andy',
//     age: 30
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// localStorage.setItem('user', userJSON)
// console.log(localStorage.getItem('user'))

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)


const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note) {
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    // console.log('Did this work ?')
    // console.log(e)
    e.target.textContent = 'This button was clicked!'
})

// document.querySelector('#remove-all-notes').addEventListener('click', function(e){
//     // console.log('Remove all notes')
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove()
//     })
// })

document.querySelector('#search-text').addEventListener('input', function(e){
    // console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })


document.querySelector('#for-fun').addEventListener('change', function(e) {
    console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})



// -- Single --
// p
// replace
//.item

// -- Multiple -- 
// p#order
// button.inventory 
// h1#title.application
// h1.applicatiom#title