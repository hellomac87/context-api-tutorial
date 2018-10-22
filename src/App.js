import React, { Component } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="panes">
        <LeftPane/>
        <RightPane/>
      </div>
    );
  }
}

export default App;
