let todos = []

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph, index) {
//     // console.log(`Item is ${p.textContent} at Index ${index}`)
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

getSavedTodos()

const filters = {
    searchText: '',
    hideComplete: false
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
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })

    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})


document.querySelector('#hide-completed').addEventListener('change', function ( e ) {
    filters.hideComplete = e.target.checked
    renderTodos(todos, filters)
})