import React from 'react';
import './App.css';

const App = () => {


    return (
      <div className="App">
        <Counter/>
      </div>
    );

};

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button id="increment-button" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <div id="number">{this.state.count}</div>
      <button id="decrement-button" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}

export default App;


/* v1.0
class App extends React.PureComponent {
  state = {
    count: 0,
  };

  handleIncrement = (event, value) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  };

  render() {
    return (
      <div className="App">
        <button id="decrement-button" onClick={this.handleDecrement}>−</button>
        <div id="number">{this.state.count}</div>
        <button id="increment-button" onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
*/