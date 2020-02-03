import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {


    return (
        <div>
            <h1>Completed Todos</h1>
            {props.completeTodos.map(todo => <ToDoCard key={todo.title} todo={todo} changeCompleteStatus = {props.changeCompleteStatus} deleteTodo = {props.deleteTodo}/>)}
        </div>
    )
}

export default CompletedContainer