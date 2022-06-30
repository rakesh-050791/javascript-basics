// Fetch existing todos from localstorage 
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON != null) {
        return todos = JSON.parse(todosJSON)
    } else {
        return []
    }
}

//Save todos to localstorage 
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


// Render application todos based on filters 
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch =  todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
        const hideCompleteMatch = !filters.hideComplete || !todo.completed 
        return searchTextMatch && hideCompleteMatch 
    }) 

    // filteredTodos = filteredTodos.filter(function(todo) {
    //     return !filters.hideComplete || !todo.completed
    //     // if (filters.hideComplete) {
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }
    // })
 
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(filteredTodos))

    filteredTodos.forEach(function(todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM element for individual todo
const generateTodoDOM = function (todo) {
    const newTodo = document.createElement('p')
        if (todo.text.length > 0) {
            newTodo.textContent = todo.text
        } else {
            newTodo.textContent = 'Unnamed TODO'
        }
    return newTodo
}

// Get the DOM elements for list summary 
const generateSummaryDOM =  function (filteredTodos) {
    const todosLeft = todosRemaining(filteredTodos)
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosLeft.length} todos left`
    return summary
}

// Get the todos left 
const todosRemaining = function (filteredTodos) {
    return filteredTodos.filter(function(todo) {
        return !todo.completed
    })
}