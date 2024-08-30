// Selecting elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Function to add a new task
addBtn.addEventListener('click', function() {
    const task = todoInput.value.trim();
    if (task !== '') {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `${task} <button class="deleteBtn">Delete</button>`;
        todoList.appendChild(li);
        todoInput.value = '';
        addDeleteEvent(li);
    }
});

// Function to delete a task
function addDeleteEvent(li) {
    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}

// Allow pressing Enter to add a task
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
