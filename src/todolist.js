import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask } from './actions';

const TodoList = ({ tasksByDate, addTask, deleteTask, updateTask }) => {
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    addTask(newTask, selectedDate);
    setNewTask('');
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const tasks = tasksByDate[selectedDate] || [];

  return (
    <div className="container">
      <h1 className="todo-heading">Todo List</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="taskForm">
          <Form.Control
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="dateForm">
          <Form.Control
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
      <h2 className="selected-date-heading">
        Tasks for {selectedDate ? selectedDate : 'All Dates'}
      </h2>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id} className="task-item">
            <div className="task-text">{task.task}</div>
            <div className="task-buttons">
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => updateTask(task.id, 'Updated Task')}
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

const mapStateToProps = (state) => {
  return {
    tasksByDate: state.tasksByDate,
  };
};

export default connect(mapStateToProps, { addTask, deleteTask, updateTask })(
  TodoList
);
