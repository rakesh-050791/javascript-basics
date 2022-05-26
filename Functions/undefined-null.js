// undefined for variable 

let name 

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function arguments 

// undefined as a function return default value

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assigned value
let age = 10 

age = null

console.log(age)