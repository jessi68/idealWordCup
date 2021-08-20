import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/actions";

export default class ToDo extends React.Component {
    constructor(props) {
        this.text = props.text;
        this.dispatch = useDispatch();
    }

    render() {
        return (
            <article>
            <text>{this.text}</text>
            <button onClick={() => dispatch(remove(this.text))}>삭제 </button>
            </article>
        )
    }
}