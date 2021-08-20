import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/actions';

export default function AddNewToDo() {
        let dispatch = useDispatch();
        let inputToDo = React.createRef();
        return (
            <div>
            <input placeholder="할 일을 작성하시오." ref={inputToDo}></input>
            <button onClick={() => dispatch(add(inputToDo.current.value))}>추가하기</button>

            </div>
        );
    
}