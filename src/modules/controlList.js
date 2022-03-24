const listContainer = document.querySelector('.list-container__items');
const notification = document.querySelector('.notification');
const rotationIcon = document.querySelector('.fa-arrows-rotate');

const spinner = () => {
  setTimeout(() => {
    roration.classList.remove('spinner');
  }, 2000);
}





displayTask();



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
