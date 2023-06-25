export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
      id: Date.now(),
      task,
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
  