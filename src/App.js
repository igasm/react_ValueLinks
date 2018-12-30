import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import AddUserExtended from './components/AddUserExtended';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUser />
      </div>
    );
  }
}

export default App;
