import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Toolbar from './components/Toolbar';
// import ImageDisplay from './components/ImageDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar  />
        <Toolbar />
        {/* <ImageDisplay /> */}
      </div>
    )
  }
}

export default App
