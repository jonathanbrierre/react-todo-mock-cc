import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
        searchTerm: "",
        sorted: false
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    dynamicSearch = () => {
      let filteredTodos = this.props.incompleteTodos.filter(todo => todo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      return filteredTodos
    }
    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

    sortByTitleLength = () => {
      console.log('hello')
    }

  render() {
    console.log(this.dynamicSearch())
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent 
              handleOnChange={this.handleOnChange}
              searchTerm ={this.state.searchTerm}
            />

            {this.dynamicSearch().map(todo => <ToDoCard key ={todo.id} todo= {todo} changeCompleteStatus = {this.props.changeCompleteStatus} deleteTodo = {this.props.deleteTodo}/>)}
        </div>
    )
  }
}
