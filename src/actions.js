export const addTask = (task, date) => ({
  type: 'ADD_TASK',
  payload: {
    id: Date.now(),
    task,
    date,
  },
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const updateTask = (id, updatedTask) => ({
  type: 'UPDATE_TASK',
  payload: {
    id,
    updatedTask,
  },
});
