import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import TodoList from './todolist';
import reducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
