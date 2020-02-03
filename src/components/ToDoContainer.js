import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {
  
  render() {
    return (
      <div id="todo-container">
        <NewToDoForm 
          newTitle = {this.props.newTitle}
          controlFormFromState = {this.props.controlFormFromState}
          submitNewTask = {this.props.submitNewTask}
        />
        <CompletedContainer 
          completeTodos = {this.props.completeTodos}
          changeCompleteStatus = {this.props.changeCompleteStatus}
          deleteTodo = {this.props.deleteTodo}
        />
        <IncompleteContainer 
          incompleteTodos = {this.props.incompleteTodos}
          changeCompleteStatus = {this.props.changeCompleteStatus}
          deleteTodo = {this.props.deleteTodo}
        />
      </div>
    );
  }
}
