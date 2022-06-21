// DOM - Document object model



// Query & remove
// const p = document.querySelector('p')

// p.remove()


// Query all & remove 
const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    // p.remove()
    // console.log(p.textContent)
    p.textContent += '**'
    console.log(p.textContent)
})

