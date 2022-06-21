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

const todosLeft = todos.filter(function(todo) {
    return !todo.completed
})

console.log(todosLeft)

const summary = document.createElement('h2')
summary.textContent = `You have ${todosLeft.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    // console.log(todo.text)
    const newTodo = document.createElement('p')
    newTodo.textContent = todo.text
    document.querySelector('body').appendChild(newTodo)
})