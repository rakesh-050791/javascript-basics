// Create an array with five todos

//print length of todos

// Print first and secod to last items -> 

todos = ["Get up at 6'o clock", "Walk the dog", "Have a cup of coffee", "Take shower", "Read newspaper"]


console.log(`You have total ${todos.length} todos!!`)

console.log(`First Todo -> ${todos[0]}`)

console.log(`Second last Todo is -> ${todos[todos.length - 2]}`)


// Delete the 3rd Item
// Add the item onto the end 
// Remove the first item from array 

todos.splice(2, 1)
console.log(`Todos -> ${todos}`)

todos.push('Leave for office')
console.log(`Todos -> ${todos}`)

todos.shift()
console.log(`Todos -> ${todos}`)


// Iterate over todos and print individual item with index
    // calling function inside function (call back function)
todos.forEach(function(item , index) {
    // console.log(`${index} : ${item}`)
    console.log(`${index +1} : ${item}`)
})

// Iterate over todos array using for loop
console.log('-*-*-*-*Iterating todos using for loop-*-*-*-*-*-*-')

for (let count = 0; count < todos.length ; count++) {
    console.log(`${count + 1} : ${todos[count]}`)
}

// New Challenge
console.log('-*-*-*-* New Challenge-*-*-*-*-*-*-')

// Convert array to array of objects  -> text , completed 
// Create a function to delete a todo by text value 
todos_1 = [
    {
        text: 'Getup at 6 o clock',
        completed: true
    },
    {
        text: 'Go for run',
        completed: true
    },
    {
        text: 'prepare coffee',
        completed: true
    },
    {
        text: 'read newspaper',
        completed: false
    },
    {
        text: 'Attend daily stand up',
        completed: false
    }
]

const deleteTodo =  function(todos, todoText){
    const index = todos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index >= -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos_1, 'Go for run')
console.log(todos_1)

// New Challenge
console.log('Filter results challenge-*-*-*-* Filter results challenge-*-*-*-*-*-*-Filter results challenge')

// write a function to return todos that are yet to be done.

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        // return todo.completed === false
        return !todo.completed
    })
}
console.log(getThingsToDo(todos_1))

console.log('Filter results challenge-*-*-*-* Filter results challenge-*-*-*-*-*-*-Filter results challenge')


console.log('SORT TODOS Challenge-*-*-*-*SORT TODOS Challenge*-*-*-*-*-*-SORT TODOS Challenge')
console.log(todos_1)

const sortTodos = function(todos) {
    todos.sort(function(a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos_1)
console.log(todos_1)
console.log('SORT TODOS Challenge-*-*-*-*SORT TODOS Challenge*-*-*-*-*-*-SORT TODOS Challenge')