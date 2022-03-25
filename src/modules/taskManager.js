/* eslint-disable import/extensions */
import {
  removeCompletedTask, removeTask, status, updateTask,
} from './controlList';

const checkbox = document.querySelectorAll('input[type=checkbox]');
const taskName = document.querySelectorAll('.task-name');
const deleteList = document.querySelectorAll('.bar');
const clearButton = document.querySelector('.list-container__remove-all');

// Remove the selected color from all of the tasks <Yellowish color>
const removeHighlight = () => {
  taskName.forEach((e) => {
    e.parentElement.classList.remove('list-highlight');
    e.nextElementSibling.classList.remove('icon-delete');
  });
};

// Mark task as completed or not, and update the task
const markTask = () => {
  for (let i = 0; i < checkbox.length; i += 1) {
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
  }
};

// Select a task, then, either update that specific task or delete that task
const selectATask = () => {
  for (let i = 0; i < taskName.length; i += 1) {
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
  }
};

const clearCompletedTasks = () => {
  clearButton.addEventListener('click', () => {
    removeCompletedTask();
    window.location.reload();
  });
};

export { markTask, selectATask, clearCompletedTasks };
