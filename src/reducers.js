const initialState = {
  tasksByDate: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const { id, task, date } = action.payload;
      const tasksForDate = state.tasksByDate[date] || [];
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: [...tasksForDate, { id, task }],
        },
      };

    case 'DELETE_TASK':
      const updatedTasksByDate = { ...state.tasksByDate };
      Object.keys(updatedTasksByDate).forEach((date) => {
        updatedTasksByDate[date] = updatedTasksByDate[date].filter(
          (task) => task.id !== action.payload
        );
      });
      return {
        ...state,
        tasksByDate: updatedTasksByDate,
      };

    case 'UPDATE_TASK':
      const { id: taskId, updatedTask } = action.payload;
      const updatedTasksByDate2 = { ...state.tasksByDate };
      Object.keys(updatedTasksByDate2).forEach((date) => {
        updatedTasksByDate2[date] = updatedTasksByDate2[date].map((task) =>
          task.id === taskId ? { ...task, task: updatedTask } : task
        );
      });
      return {
        ...state,
        tasksByDate: updatedTasksByDate2,
      };

    default:
      return state;
  }
};

export default rootReducer;
