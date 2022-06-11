let myBook = {
    title: '1984',
    author: 'George orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    // console.log(`${book.title} by ${book.author}`)
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let firstBook = getSummary(myBook)
console.log(firstBook)
console.log(firstBook.summary)


let secondBook = getSummary(otherBook)
console.log(secondBook)
console.log(firstBook.pageCountSummary)

// Challenge Area 

// create function - take fahrenheit in - return object with all three

let tempratureCoverter = function(fahrenheit) {
    celsius = (fahrenheit - 32) * 5/9 
    kelvin = (fahrenheit - 32) * 5/9 + 273.15

    return {
        fahrenheit: `${fahrenheit}°F was passed as input`,
        fahrenheitToCelsius: `${fahrenheit}°F is ${celsius}°C `,
        fahrenheitToKelvin: `${fahrenheit}°F is  ${kelvin}K`
    }
}

let fahrenheit = 74
let tempratureConverted = tempratureCoverter(fahrenheit)
console.log(tempratureConverted)

console.log(tempratureConverted.fahrenheitToCelsius)