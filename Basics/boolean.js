// === : equality operator 
// !== : non equality operator 
// < : less then operator 
// > : greater then operator 
// <= : less then or equal to operator 
// >= : greater then or equal to operator 

let temp = 31;

// Is equal to or not equal to comparison
let isFreezing = temp === 31
let isNotFreezing = temp !== 31

console.log(isFreezing)
console.log(isNotFreezing)


// Greater then, less then comparison
let isLessFreezing = temp > 31
let isMoreFreezing = temp < 31

console.log(isLessFreezing)
console.log(isMoreFreezing)


// String comparison
let str = 'Rakesh';

let isRakesh = str === 'Rakesh'
let isNotRakesh = str !== 'Rakessh'

console.log(isRakesh)
console.log(isNotRakesh)


// If statement

// Is equal to or not equal to comparison
let isFreezingOutside = temp === 31
let isNotFreezingOutside = temp !== 31

if (isFreezingOutside) {
    console.log('Is it freezing outside ?', isFreezingOutside)
}

// console.log(isFreezingOutside)
// console.log(isNotFreezingOutside)