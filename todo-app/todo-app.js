todos = [
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

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph, index) {
//     // console.log(`Item is ${p.textContent} at Index ${index}`)
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })


// Task
// 1 : Setup a div contain for todos 
// 2 : SetupFilters (searchText) & wire up a new filter input to change it.
// 3 : Create a renderTodos function to render and render the latest filtered data 

const filters = {
    searchText: '',
    hideComplete: false
}

const renderTodos = function(todos, filters) {
    // let filteredTodos = todos.filter(function (todo) {
    //     return todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
    // }) 

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

    const todosLeft = filteredTodos.filter(function(todo) {
        return !todo.completed
    })
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosLeft.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function(todo) {
        // console.log(todo.text)
        const newTodo = document.createElement('p')
        newTodo.textContent = todo.text
        document.querySelector('#todos').appendChild(newTodo)
    })
}

renderTodos(todos, filters)



// Listen for new todo creation
// document.querySelector('#create-todo').addEventListener('click', function() {
//     console.log('Add new todo')
// })

// document.querySelector('#new-todo-text').addEventListener('input', function(e){
//     console.log(e.target.value)
// })

document.querySelector('#filter-todos').addEventListener('input', function(e) {
    // console.log(e)
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


// Create a form with a single input for todo text
// setup a submit handler and cancel the default action 
// add a new item to the todos array with that text data  (completed value as false)
// Re render the application 
// clear the input field value

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})


document.querySelector('#hide-completed').addEventListener('change', function ( e ) {
    // console.log(e.target.checked)
    filters.hideComplete = e.target.checked
    renderTodos(todos, filters)
})