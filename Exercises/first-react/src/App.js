import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Prendas de vestir</h1>
        <ul>
          <li className="color1">Camisa</li>
          <li className="color2">Pantalón</li>
          <li className="color3">Medias</li>
          <li className="color4">Zapatos</li>
          <li className="color5">Corbata</li>
        </ul>
      </div>
    );
  }
}

export default App;
