const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4']

console.log(notes)
console.log(notes[1])

//property
console.log(notes.length)

console.log(notes[notes.length - 1 ])


// Add item to array at last position

notes.push('My new Note')
console.log(notes)

// Remove item from array from last position
notes.pop()
console.log(notes)

console.log('-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-')
// Add item to array at first position

notes.unshift('My first Note')
console.log(notes)

// Remove item from array from first position
notes.shift()
console.log(notes)

console.log('-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-')

// Update array (update, delete from array or add item)

    //Update array at position 1 (index)
    notes[1] = 'This is new Note 1'
    console.log(notes)
    
    //start at index of zero 1 and delete nothing)
    notes.splice(1, 0)
    console.log(notes)

    //start at index of zero (0) and replace 2 items with the given value
    notes.splice(1, 2, 'New note from splice method')
    console.log(notes)

    //start at index of zero (0) and delete 2 items
    notes.splice(0, 2)
    console.log(notes)



console.log('-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-')


// Iterating over array
const notes_1 = ['Note 1', 'Note 2', 'Note 3', 'Note 4']

// calling function inside function (call back function)

notes_1.forEach(function(item, index) {
    // console.log('Inside loop')
    console.log(`Printing ${item} on index ${index}`)
})

// Counting ..1 

for (let count = 1; count <=4; count += 2) {
    console.log(`Printing count ${count}`)
}
    
console.log('-*-*-*-*-*-*-*-*-*-*-')

for (let count = 3; count >=0; count--) {
    console.log(`Printing count ${count}`)
}

console.log('-*-*-*-*-Looping over notes array*-*-*-*-*-*-')

for (let count = 0; count < notes_1.length; count++) {
    console.log(`Printing notes  ${notes_1[count]}`)
}

console.log('-*-*-*-*Reverse Loop-*-*-*-*-*-*-')

for (let count = notes_1.length - 1; count >= 0; count--) {
    console.log(`Printing notes  ${notes_1[count]}`)
}