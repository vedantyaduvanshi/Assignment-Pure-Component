
import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
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
    console.log('This is Pure Component'); // Logging as instructed
    return (
      <div>
        <h2>Pure Counter Component</h2>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default PureCounterComponent;
