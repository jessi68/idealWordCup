import React from 'react';
import { add } from '../redux/actions';

export default class AddNewToDo extends React.Component {
    constructor(props) {
        this.dispatch = useDispatch();
    }

    render() {
        return (
            <div>
            <input placeholder="할 일을 작성하시오." ref={(todo) => this.todo = todo}></input>
            <button onClick={() => add(this.todo)}>추가하기</button>
            </div>
        );
    }
}