import './App.css';
import React from 'react';

class App extends React.Component {

  divide(a, b) {
    return a / b;
  }

  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
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
