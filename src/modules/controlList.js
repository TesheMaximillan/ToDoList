const listContainer = document.querySelector('.list-container__items');
const notification = document.querySelector('.notification');
const roration = document.querySelector('.fa-arrows-rotate');
const form = document.querySelector('.list-container__list-content');

let tasks = [];

const storage = localStorage.getItem('listItem');
tasks = storage === null ? [] : JSON.parse(storage);

const task = {
  description: '',
  completed: false,
  index: 0,
};

// Loading...
const spinner = () => {
  roration.classList.add('spinner');
  setTimeout(() => {
    roration.classList.remove('spinner');
  }, 2000);
};

// Display tasks on eash list-item
const displayTask = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((e) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('input');
    const i = document.createElement('i');
    i.classList.add('icon', 'fa-solid', 'fa-ellipsis-vertical', 'bar');

    input.type = 'checkbox';
    input.classList.add('checkbox');
    li.className = 'list-container__items--item';
    span.className = 'task-name';
    span.value = e.description;
    li.append(input, span, i);
    listContainer.appendChild(li);
  });
  notification.textContent = tasks.length;
};

displayTask();

// Update Index after the list removal
const updateIndex = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
};

// Add task
const addTask = () => {
  form.addEventListener('submit', (event) => {
    task.description = form.elements.list.value;
    task.index = tasks.length;
    tasks.push(task);
    localStorage.setItem('listItem', JSON.stringify(tasks));
    form.elements.list.value = '';
    window.location.reload();
    event.preventDefault();
  });
};

// Remove single Task
const removeTask = (index) => {
  tasks.splice(index, 1);
  updateIndex();
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

// Remove completed task using filter method
const removeCompletedTask = () => {
  tasks = tasks.filter((task) => task.completed === false);
  updateIndex();
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

// Update Task
const updateTask = (index, value) => {
  tasks[index].description = value;
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

const status = (index, type) => {
  tasks[index].completed = type;
};

export {
  addTask, removeTask, updateTask, status, removeCompletedTask, spinner,
};
