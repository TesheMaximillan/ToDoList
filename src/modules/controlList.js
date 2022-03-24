import {
  addTask,
  removeCompletedTask,
  removeTask,
  status,
  updateTask,
} from './taskManager';

const listContainer = document.querySelector('.list-container__items');
const notification = document.querySelector('.notification');
const rotationIcon = document.querySelector('.fa-arrows-rotate');
const form = document.querySelector('.list-container__list-content');

const spinner = () => {
  rotationIcon.classList.add('spinner');
  setTimeout(() => {
    rotationIcon.classList.remove('spinner');
  }, 2000);
};

addTask(form);

const displayTask = (tasks) => {
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
  notification.textContent = tasks.length;
};

const checkMark = (i, checkbox) => {
  checkbox[i].addEventListener('change', () => {
    if (checkbox[i].checked) {
      checkbox[i].classList.add('input-after');
      checkbox[i].nextElementSibling.classList.add('checked');
      status(i, true);
    } else {
      checkbox[i].classList.remove('input-after');
      checkbox[i].nextElementSibling.classList.remove('checked');
      status(i, false);
    }
  });
};

const removeHighlight = (taskName) => {
  taskName.forEach((e) => {
    e.parentElement.classList.remove('list-highlight');
    e.nextElementSibling.classList.remove('icon-delete');
  });
};

const selectTask = (i, taskName, deleteList) => {
  taskName[i].addEventListener('click', () => {
    removeHighlight(taskName);
    taskName[i].parentElement.classList.add('list-highlight');
    taskName[i].nextElementSibling.classList.add('icon-delete');

    deleteList[i].addEventListener('click', () => {
      removeTask(i);
      window.location.reload();
    });

    taskName[i].addEventListener('input', () => {
      updateTask(i, taskName[i].value);
    });
  });
};

const checkList = (checkbox) => {
  for (let i = 0; i < checkbox.length; i += 1) {
    checkMark(i, checkbox);
  }
};

const selectATask = (taskName, deleteList) => {
  for (let i = 0; i < taskName.length; i += 1) {
    selectTask(i, taskName, deleteList);
  }
};

const clearCompletedTask = (clearButton) => {
  clearButton.addEventListener('click', () => {
    removeCompletedTask();
    window.location.reload();
  });
};

export { spinner, displayTask, checkList, selectATask, clearCompletedTask };
