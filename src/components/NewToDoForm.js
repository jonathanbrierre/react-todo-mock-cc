import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  
  onChange = (e) => {
    this.props.controlFormFromState(e)
  }

  onSubmit = (e) => {
    this.props.submitNewTask(e)
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit = {this.onSubmit}>
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="newTitle" placeholder="Title" value ={this.props.newTitle} onChange = {this.onChange}/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
