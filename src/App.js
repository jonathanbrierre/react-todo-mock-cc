import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: [],
    newTitle: ''
  }

  renderIncompleteTodos = () => {
    let incompleteTodos = this.state.todos.filter(todo => !todo.completed)
    return incompleteTodos
  }

  renderCompleteTodos = () => {
    let completedTodos = this.state.todos.filter(todo => todo.completed)
    return completedTodos
  }

  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(json => this.setState({todos: json}))
  }

  changeCompleteStatus = (title) => {
    let updatedTodos = this.state.todos.map(todo => {
      if(todo.title === title){
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  deleteTodo = (title) => {
    let filteredTodos = this.state.todos.filter(todo => todo.title !== title)
    this.setState({todos: filteredTodos})
  }

  controlFormFromState = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNewTask = (e) => {
    e.preventDefault()

    let configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
      body: JSON.stringify({
        title: this.state.newTitle,
        completed: false
      })
    }
    fetch('http://localhost:3000/todos', configObj)
    .then(resp => resp.json())
    .then(json => this.setState({todos: [...this.state.todos, json]}))
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer 
          deleteTodo = {this.deleteTodo}
          incompleteTodos = {this.renderIncompleteTodos()}
          completeTodos = {this.renderCompleteTodos()}
          changeCompleteStatus = {this.changeCompleteStatus}
          newTitle = {this.state.newTitle}
          controlFormFromState = { this.controlFormFromState}
          submitNewTask = {this.submitNewTask}
        />
      </div>
    );
  }
}

export default App;
