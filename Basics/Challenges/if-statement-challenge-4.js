
// Challenge 3 : Using If statement

// Create age set to your age
// Calculate child if they are 7 or under  
// Calculate senior if they are 65 or older
// print is child value 
// print is senior value  

age = 85;

if (age <= 7) {
    console.log('Input age is of child')
}

if (age >= 65) {
    console.log('Input age is of senior')
}

// Challenge 3 : Using If else if and else statement

// Its freezing outside (temp 31)
// Its hot outside (120)
// Go for it , it is preety nice. (temp 45)

let temp = 32 ;

if (temp <= 32) {
    console.log(`Its freezing outside, with outside temprature ${temp}`)
} else if (temp >= 110) {
    console.log(`Its hot outside, with outside temprature ${temp}`)
} else if (temp > 35 && temp < 80) {
    console.log(`Go for it , it is preety nice with temp ${temp}`)
} else {
    console.log(`chill at home with outside temprature ${temp}`)
}