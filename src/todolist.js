import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask } from './actions';

const TodoList = ({ tasks, addTask, deleteTask, updateTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleUpdate = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
  };

  return (
    <div className="container">
      <h1 className="todo-heading">Todo List</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTask">
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-input"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id} className="task-item">
            <div className="task-text">{task.task}</div>
            <div className="task-buttons">
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  handleUpdate(task.id, prompt('Update task', task.task))
                }
              >
                Update
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
