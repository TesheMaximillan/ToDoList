import './main.scss';
import './asset/icons/sprite.svg';
import { addTask } from './modules/controlList';

const form = document.querySelector('.list-container__list-content');

addTask(form);

const checkbox = document.querySelectorAll('input[type=checkbox]');

const checkMark = (input) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      input.nextElementSibling.classList.add('checked');
    } else input.nextElementSibling.classList.remove('checked');
  });
};

checkbox.forEach((e) => checkMark(e));
