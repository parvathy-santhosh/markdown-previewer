import React, { Component } from 'react';
import './App.css';
import MarkDown from './MarkDown.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text : event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> MarkDown Previewer </h1>
        <hr className="hr" />
        <textarea id="editor" onChange={this.handleChange} />
        <MarkDown text={this.state.text}/>
        <hr className="hr" />
        <small> parvathy-santhosh 2018 </small>
        </header>
      </div>
    );
  }
}

export default App;
