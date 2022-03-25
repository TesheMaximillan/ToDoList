/* eslint-disable import/extensions */
import './main.scss';
import { addTask, spinner } from './modules/controlList';
import { clearCompletedTasks, markTask, selectATask } from './modules/taskManager';

// Load and display the number of tasks
spinner();

// Create and Add new task
addTask();

/**
 * 1. Highlight the selected task
 * 2. Remove the list when the delete icon is pressed
 * 3. Update task list when the value of the task is changed
 */
selectATask();

// Select or Unselect for task status <completed or Not>
markTask();

// Clear complted tasks
clearCompletedTasks();