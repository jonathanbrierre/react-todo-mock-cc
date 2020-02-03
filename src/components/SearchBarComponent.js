import React, { Component } from 'react';

export default class SearchBarComponent extends Component {

  onChange = (e) => {
    this.props.handleOnChange(e)
  }

  render() {
    return (
    <div className="ui input fluid"> 
        <input autoComplete="off" placeholder="Search Term" type="text" name="searchTerm" value = {this.props.searchTerm} onChange = {this.onChange}/>
    </div>
    );
  }
}
