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

document.querySelector('button').addEventListener('click', function(e){
    // console.log('Did this work ?')
    // console.log(e)
    e.target.textContent = 'This button was clicked!'
})