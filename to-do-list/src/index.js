import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoApplication from "./component/ToDoApplication";

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <ToDoApplication/>
    </Provider>
)