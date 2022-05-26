// EXPLORING MULTIPLE ARGUMENTS

let add = function (a, b) {
    sum = a + b
    return sum
}

let result = add(a=10, b=20)

console.log(result)


//SETTING UP DEFAULT VALUE OF ARGUMENTS 

let getScoreText = function (name = 'Anonymous', score = 200) {
    return `${name} scored ${score}`
}

let response = getScoreText(name = 'Andrew', score = undefined )

console.log(response)

// =============================Challenge Area==========================================

// Calculate tip percentage on bill in a restaurant 
// Arguments : totalBill, tipPercent (20 % default tip)
// return template string with :  A 25% tip on $40 be $10 

let getTip = function (totalBill, tipPercent = .2) {
    let percent = tipPercent * 100 
    let tip = totalBill * tipPercent
    return `A ${percent}% tip on $${totalBill} will be $${tip}`
}


let tip = getTip(40, .25)
console.log(tip)


