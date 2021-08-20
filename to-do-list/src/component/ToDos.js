import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";


export default function ToDos() {

   let toDoContents = useSelector(store => store.toDoReducer);
   console.log(toDoContents)
if(toDoContents === undefined) {
    return (
        <section>

        </section>
    )
}
        const toDoViews = toDoContents.map((todo, idx) => {
            return <ToDo text={todo} key={idx}></ToDo>
        });

        return (<section>
            {toDoViews}
        </section>);
    
}