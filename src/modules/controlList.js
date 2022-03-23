const listContainer = document.querySelector('.list-container__items');

let tasks = [];

const storage = localStorage.getItem('listItem');
tasks = storage === null ? [] : JSON.parse(storage);

const task = {
  description: '',
  completed: false,
  index: 0,
};

const displayTask = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((e) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const i = document.createElement('i');
    i.classList.add('icon', 'fa-solid', 'fa-ellipsis-vertical');

    input.type = 'checkbox';
    li.className = 'list-container__items--item';
    span.className = 'task-name';
    span.textContent = e.description;
    li.append(input, span, i);
    listContainer.appendChild(li);
  });
};

displayTask();

const addTask = (form) => {
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

export { addTask };