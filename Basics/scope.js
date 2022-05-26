// JS uses lexical scoping (sometimes reffered to as static scoping)

// Types of scopes 
// Global scope : Defined outside of all code blocks
// Local scope : Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor.

// Global scope (varOne)
    // Local scope (varTwo)
        // Local scope (varFour)
    // Local scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    
    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
    console.log(varOne)
    console.log(varTwo)
}




console.log(varTwo) // It won't execute because local variable is called outside of code block