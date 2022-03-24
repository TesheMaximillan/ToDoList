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
  roration.classList.add('spinner');
  notification.textContent = tasks.length;
};

