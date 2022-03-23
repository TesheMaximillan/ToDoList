import _ from 'lodash';
import './main.scss';

const listContainer = document.querySelector('.list-container__items');

const tasks = [
  {
    description: "Standup Team",
    completed: false,
    index: 3
  },
  {
    description: "Morning Session",
    completed: true,
    index: 1
  },
  {
    description: "Coding Partner",
    completed: false,
    index: 2
  },
]

tasks.sort((a, b) => {
  return a.index - b.index
})

tasks.forEach(e => {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const span = document.createElement('span');
  input.type = 'checkbox';
  li.className = 'list-container__items--item';
  span.className = '';
  span.textContent = e.description;
  li.append(input, span);
  listContainer.appendChild(li);
})

const checkbox = document.querySelectorAll('input[type=checkbox]');

const checkMark = input => {
  input.addEventListener('change', () => {
    if (input.checked) {
      input.nextElementSibling.classList.add('checked');
    }else input.nextElementSibling.classList.remove('checked');;
  })
}

checkbox.forEach(e => checkMark(e))

