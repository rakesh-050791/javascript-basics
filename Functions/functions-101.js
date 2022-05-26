// function : input (argument), code, output (return value)


let greetUser = function () {
    console.log('Welcome user!!')
}

greetUser()

// Square function

let square = function (num) {
    let response = num * num
    return response
}

let value = square(8)
let otherValue = square(10)

console.log(`Value is : ${value}, Other-Value is : ${otherValue}`)


// =============================Challenge Area==========================================

// Convert FahrenheitToCelsius && FahrenheitToKelvin
    // Call a couple of times (32 -> 0) (68 -> 20)
    // Print the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let response =  (fahrenheit - 32) * 5/9 
    return response
}

let convertFahrenheitToKelvin = function (fahrenheit) {
    let response =  (fahrenheit - 32) * 5/9 + 273.15
    return response
}

let temprature = convertFahrenheitToCelsius(32) 
let otherTemprature = convertFahrenheitToCelsius(68)

let tempratureInKelvin = convertFahrenheitToKelvin(32) 
let otherTempratureInKelvin = convertFahrenheitToKelvin(68)

console.log(`32°F is : ${temprature}K, 68°F is : ${otherTemprature}K`)
console.log(`32°F is : ${tempratureInKelvin} K, 68°F is : ${otherTempratureInKelvin} K`)