document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const prioritySelect = document.getElementById('priority');
    const dueDateInput = document.getElementById('dueDate');
    const categoryInput = document.getElementById('categoryInput');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;
        const category = categoryInput.value;

        const li = document.createElement('li');
        li.className = `priority-${priority}`;
        
        const taskContent = `
            <span>${taskText} - ${category} - ${dueDate} (${priority})</span>
            <button class="complete">✔</button>
            <button class="delete">✖</button>
        `;

        li.innerHTML = taskContent;
        taskList.appendChild(li);

        taskInput.value = '';
        prioritySelect.value = 'low';
        dueDateInput.value = '';
        categoryInput.value = '';

        li.querySelector('.complete').addEventListener('click', completeTask);
        li.querySelector('.delete').addEventListener('click', deleteTask);
    }

    function completeTask() {
        const li = this.parentElement;
        li.classList.toggle('completed');
    }

    function deleteTask() {
        const li = this.parentElement;
        taskList.removeChild(li);
    }
});
