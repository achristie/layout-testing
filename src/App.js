import React, { Component } from 'react';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Aside />
      </div>
    );
  }
}

export default App;
