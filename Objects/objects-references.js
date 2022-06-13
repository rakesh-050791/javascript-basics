let myAccount = {
    name: 'Andrew M',
    expenses: 0,
    income: 0
}

// let otherAccount = myAccount

// otherAccount.income = 2000

let addExpensee = function (account, amount) {
    account.expenses = account.expenses + amount
    // console.log(account)
}

addExpensee(myAccount, 2.5) 

console.log(myAccount)



// Challenge Area 

// create functions 
    // - add income
    // - add expense
    // - reset account 


    // - get account summary 
    // - Account for andrew has $900. $1000 in income, $100 in expenses


let andrewAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0 
}

let getSummary = function (account) {
    balance = account.income - account.expenses
    return `Account for ${account.name} has  $${balance}. $${account.income} in income, $${account.expenses} in expenses`
}


addIncome(andrewAccount, 1000)
addExpense(andrewAccount, 200)
console.log(getSummary(andrewAccount))


resetAccount(andrewAccount)
console.log(getSummary(andrewAccount))
