import React from 'react';

export default class AddNewToDo extends React.Component {
    
    render() {
        return (
            <div>
            <input placeholder="할 일을 작성하시오."></input>
            <button>추가하기</button>
            </div>
        );
    }
}