let name = 'Andrew M'

// Length Property (Property)

console.log(name.length)


// Convert to upper case  (Method)

console.log(name.toUpperCase())

// Convert to lower case  (Method)

console.log(name.toLowerCase())


// Includes Method 

let password = 'abc123password098'
console.log(password.includes('password'))


// Trim 

let otherName = ' Test tes '
console.log(otherName.trim())


// Challenge Area

// Is Valid Password 
    // - If length is more then 8 & it doesn't contain the word password

let isValidPassword = function (password) {
    // if (password.length >= 8 &&  !password.includes('password')) {
    //     return true
    // } else  {
    //     return false 
    // }
    return password.length >= 8 &&  !password.includes('password')
}

console.log(isValidPassword('123password'))
console.log(isValidPassword('andy123w'))