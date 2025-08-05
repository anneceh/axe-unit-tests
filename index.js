// Select DOM elements
const input = document.getElementById("task-input")
const addButton = document.getElementById("add-task")
const list = document.getElementById("todo-list")

// Load from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || []

// Render tasks
function renderTodos() {
    list.innerHTML = ""
    todos.forEach((todo, index) => {
        const li = document.createElement("li")
        li.className = todo.completed ? "completed" : ""
        li.innerHTML = `
        <span>${todo.text}</span>
        <div>
            <button onclick="toggleComplete(${index})">✓</button>
            <button onclick="deleteTodo(${index})">🗑️</button>
        </div>
        `
        list.appendChild(li)
    })
}

// Add new task
addButton.addEventListener("click", () => {
    const text = input.value.trim()
    if (text !== "") {
        todos.push({ text, completed: false })
        input.value = ""
        saveAndRender()
    }
});

// Mark task as complete/incomplete
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveAndRender()
}

// Delete task
function deleteTodo(index) {
    todos.splice(index, 1);
    saveAndRender()
}

// Save to localStorage and re-render
function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos()
}

// Initial load
renderTodos()