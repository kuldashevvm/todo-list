const inputText = document.querySelector('.input-text')
const todos = document.querySelector('.todos')
const todoForm = document.querySelector('.todo-form')

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = inputText.value
    addTodoList(inputValue)
    inputText.value = ''
})

function addTodoList(todo) {
    // li
    const li = document.createElement('li')
    li.textContent = todo
    li.classList.add('todo-item')

    //check button
    const chekcBtn = document.createElement('button')
    chekcBtn.innerHTML = '<i class="fas fa-check"></i>'
    chekcBtn.classList.add('check-btn')
    li.appendChild(chekcBtn)

    //trash button
    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn')
    li.appendChild(trashBtn)
    
    todos.appendChild(li)
}

document.addEventListener('click', (e) => {
    if(e.target.classList[0] == 'trash-btn') {
        const item = e.target.parentElement
        item.remove()
    }

    if (e.target.classList[0] == 'check-btn') {
        const item = e.target.parentElement
        item.classList.toggle('done')
    }
})





