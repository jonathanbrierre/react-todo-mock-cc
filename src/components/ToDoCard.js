import React from 'react'

const ToDoCard = (props) => {

  const onClickCompleted = () =>{
    props.changeCompleteStatus(props.todo.title)
  } 

  const onClickDelete = () => {
    props.deleteTodo(props.todo.title)
  }
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {props.todo.completed ? <button onClick={onClickCompleted} className="ui button orange">Incomplete</button> : <button onClick={onClickCompleted} className="ui button blue">Complete</button>}
          <button onClick={onClickDelete} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard