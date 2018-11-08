import React, { Component } from 'react';
import './App.css';
import MarkDown from './MarkDown.js';

const PLACEHOLDER = '# Heading 1 \n\n   ## Heading 2 \n [link here](https://www.freecodecamp.com) \n  \n`inline code` \n<pre>Preformatted text</pre> \n ``` \n code block \n ``` \n \n **bolded text** \n * List item \n >Block quotes \n\n ![alt text](https://github.com/parvathy-santhosh/markdown-previewer/raw/master/screenshot.PNG?raw=true)';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : PLACEHOLDER
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
        <hr className="hr margin" />
        <div>
          <textarea id="editor" className="a-block" onChange={this.handleChange}>{PLACEHOLDER}</textarea>
          <MarkDown text={this.state.text}/>
        </div>
        <hr className="hr margin" />
        <small className="margin"> parvathy-santhosh 2018 </small>
        </header>
      </div>
    );
  }
}

export default App;
