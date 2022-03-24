import './main.scss';
import { checkList, clearCompletedTask, displayTask, selectATask, spinner } from './modules/controlList';
import { allTasks as tasks } from './modules/taskManager';

const clearButton = document.querySelector('.list-container__remove-all');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const taskName = document.querySelectorAll('.task-name');
const deleteList = document.querySelectorAll('.bar');

// Load and shows the number of tasks
spinner();

// Show Tasks into the dom
displayTask(tasks);

// Check the task if it's completed or not
checkList(checkbox);

/**
 * When the task is selected
 *  > Highlight the list section
 *  > Delete task when the delete icon is pressed
 *  > Update task if the value is changed
 */
selectATask(taskName, deleteList);

// Remove completed tasks
clearCompletedTask(clearButton);