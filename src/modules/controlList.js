const listContainer = document.querySelector('.list-container__items');
const notification = document.querySelector('.notification');
const rotationIcon = document.querySelector('.fa-arrows-rotate');

setTimeout(() => {
  roration.classList.remove('spinner');
}, 2000);





displayTask();

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

const removeCompletedTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) removeTask(i);
  }
  updateIndex();
};

const updateTask = (index, value) => {
  tasks[index].description = value;
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

const status = (index, type) => {
  tasks[index].completed = type;
};

export {
  addTask, removeTask, updateTask, status, removeCompletedTask,
};
