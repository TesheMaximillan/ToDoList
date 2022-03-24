let tasks = [];

const storage = localStorage.getItem('listItem');
tasks = storage === null ? [] : JSON.parse(storage);

const task = {
  description: '',
  completed: false,
  index: 0,
};

const displayTask = (listContainer, rotationIcon, notification) => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((e) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('input');
    const i = document.createElement('i');
    i.classList.add('icon', 'fa-solid', 'fa-ellipsis-vertical', 'bar');

    input.type = 'checkbox';
    li.className = 'list-container__items--item';
    span.className = 'task-name';
    span.value = e.description;
    li.append(input, span, i);
    listContainer.appendChild(li);
  });
  rotationIcon.classList.add('spinner');
  notification.textContent = tasks.length;
};

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

const updateIndex = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
};


const removeTask = (index) => {
  tasks.splice(index, 1);
  updateIndex();
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};
