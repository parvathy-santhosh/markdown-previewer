import React, { Component } from 'react';
import './App.css';

class MarkDown extends Component {
  render() {
    return (
      <p id="preview">{this.props.text}</p>
    );
  }
}

export default MarkDown;
