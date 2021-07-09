import './App.css';
import React from 'react';

class App extends React.Component {

  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        Calculadora
      </div>
    );
  }
}

export default App;
