import React from 'react';
import { Button } from 'reactstrap';

class Counter extends React.Component {

  state = {
    counter: 99
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return(
      <span style={{ marginLeft: 20 }}>
        <span style={{ marginRight: 10 }}>{this.state.counter}</span>
        <Button color="danger" onClick={this.decrement}>Decrement</Button>
      </span>
    );
  }
}

export default Counter;