import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";


export default class ToDos extends React.Component {

    constructor(props) {
        super(props);
        this.toToContents = useSelector(store => store.toDoReducer);
    }

    render() {
        const toDoViews = this.toDoContents.map((todo, idx) => {
            return <ToDo text={todo}></ToDo>
        });

        <section>
            {toDoViews}
        </section>
    }
}