import './App.css';
import React from 'react';

class App extends React.Component {

  divide(a, b) {
    return a / b;
  }

  add(a, b) {
    return a + b;
  }

  square(a){
    return a * a;
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
