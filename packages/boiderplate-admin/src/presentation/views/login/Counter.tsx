/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';


export interface CounterProps {
}

export interface CounterState {
  count: any;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>
          You clicked
          {' '}
          {this.state.count}
          {' '}
          times
        </p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
