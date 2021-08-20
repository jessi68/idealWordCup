import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/actions";

export default function ToDo({text, key}) {
    
        const dispatch = useDispatch();
        return (
            <article key={key}>
            <text>{text}</text>
            <button onClick={() => dispatch(remove(text))}>삭제 </button>
            </article>
        )
}