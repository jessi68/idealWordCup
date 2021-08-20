import React from 'react';
import AddNewToDo from './AddNewToDo';
import ToDos from './ToDos';


export default class ToDoApplication extends React.Component {

    render() {
        return (
            <main>
                
            <AddNewToDo></AddNewToDo>
            <ToDos></ToDos>
            
            </main>
        )
    }
}

