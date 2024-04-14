let button = document.getElementById('add');
let todoList = document.getElementById('todoList');
let input = document.getElementById('input');
let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodoElement(todo));
}

button.addEventListener('click', () => {
    let todoText = input.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
        addTodoElement(todoText);
        input.value = '';
    }
});

function addTodoElement(todo) {
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para);

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        removeTodoItem(todo);
    });

    para.addEventListener('dblclick', () => {
        todoList.removeChild(para);
        removeTodoItem(todo);
    });
}

function removeTodoItem(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}
