const account = {
    name: 'Andy Mead',
    expenses: [],
    income:[],
    addExpense: function(description, amount) {
        this.expenses.push({
           expenses: description,
           amount: amount
        })
    },
    addIncome: function(jobType, amountEarned){
        this.income.push({
            jobType: jobType,
            amountEarned: amountEarned
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        

        this.expenses.forEach(function(expense, index) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function(income, index){
            totalIncome += income.amountEarned
        })

        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${accountBalance}, 
                $${totalIncome} in income and $${totalExpenses} in expenses`
        // return `${this.name} has $${totalExpenses} in expenses`
    }
}

//Expense -> description, amount 

// addExpense -> description, amount 
// getAccountSummary -> total up all expenses & print -> Andy has $1200 in expenses 

account.addExpense('Rent', 1000)
account.addExpense('Coffee', 500)

console.log(account.getAccountSummary())


// 1 : Add income array to account 
// 2 : addIncome method -> description, amount 
// 3 : Tweak getAccountSummary
// 4 : Andy mead has a balance of $10. $100 in income and $90 in expenses.

account.addIncome('Job', 5000)
account.addIncome('Freelance', 1000)

console.log(account.getAccountSummary())