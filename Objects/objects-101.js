// Create object and read object properties
let myBook = {
    title: '1984',
    author: 'George orwell',
    pageCount: 326
}

// console.log(myBook)
// console.log(myBook.title)
// console.log(myBook.pageCount)

console.log(`${myBook.title} by author ${myBook.author}`)

// update object and object properties

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by author ${myBook.author}`)


// Challenge area 
// Model a person 
// Example : print -> Andrew is 30 and lives in Munuch
// Increment age by 1

let Person = {
    name: 'Andrew',
    age: 30,
    location: 'Munich, Germany'
}

console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`)

Person.age = 31

console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`)
