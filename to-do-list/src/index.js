import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoApplication from "./component/ToDoApplication";
import { createStore } from 'redux';
import { toDoReducer } from './redux/reducers/ToDoReducer';

const store = createStore(toDoReducer);


ReactDOM.render(
    <Provider store={store}>
        <Routes></Routes>
    </Provider>,
    document.getElementById('root')
)

reportWebVitals();