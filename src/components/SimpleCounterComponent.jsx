
import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };

  setToggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  render() {
    console.log('This is Simple Component'); // Logging as instructed
    return (
      <div>
        <h2>Simple Counter Component</h2>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default SimpleCounterComponent;
