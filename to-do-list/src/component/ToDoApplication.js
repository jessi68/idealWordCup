import React from 'react';

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

