import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoApplication from "./component/ToDoApplication";
import { createStore } from 'redux';
import { rootReducer, toDoReducer } from './redux/reducers/ToDoReducer';
import { Provider } from "react-redux";

const store = createStore(rootReducer);



ReactDOM.render(
    <Provider store={store}>
        <ToDoApplication></ToDoApplication>
    </Provider>,
    document.getElementById('root')
)

reportWebVitals();