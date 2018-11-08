import React, { Component } from 'react';
import './App.css';

var myMarked = require('marked');
myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class MarkDown extends Component {
  componentDidUpdate(){
    const e = document.getElementById('preview');
    e.innerHTML = myMarked(this.props.text);
  }
  render() {
    return <div className="a-block" id="preview"></div>;
  }
}

export default MarkDown;
