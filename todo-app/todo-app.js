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

// 1 : Setup a div contain for todos 
// 2 : SetupFilters (searchText) & wire up a new filter input to change it.
// 3 : Create a renderTodos function to render and render the latest filtered data 

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
    }) 

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
document.querySelector('#create-todo').addEventListener('click', function() {
    console.log('Add new todo')
})

document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(e.target.value)
})

document.querySelector('#filter-todos').addEventListener('input', function(e) {
    // console.log(e)
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})