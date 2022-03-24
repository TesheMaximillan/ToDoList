import './main.scss';
import './asset/icons/sprite.svg';

import {
  addTask, removeCompletedTask, removeTask, status, updateTask,
} from './modules/controlList';

const form = document.querySelector('.list-container__list-content');
const clearButton = document.querySelector('.list-container__remove-all');

addTask(form);

const checkbox = document.querySelectorAll('input[type=checkbox]');
const taskName = document.querySelectorAll('.task-name');
const deleteList = document.querySelectorAll('.bar');

const checkMark = (i) => {
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

const removeHighlight = () => {
  taskName.forEach((e) => {
    e.parentElement.classList.remove('list-highlight');
    e.nextElementSibling.classList.remove('icon-delete');
  });
};

clearButton.addEventListener('click', () => {
  removeCompletedTask();
  window.location.reload();
});

const selectTask = (i) => {
  taskName[i].addEventListener('click', () => {
    removeHighlight();
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

for (let i = 0; i < checkbox.length; i += 1) { checkMark(i); }
for (let i = 0; i < taskName.length; i += 1) { selectTask(i); }