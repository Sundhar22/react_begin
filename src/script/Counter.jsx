import React from "react";
import { ThemeContext } from "../App";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initial,
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <h1>Counter</h1>
            <p style={style}>Count: {this.state.count}</p>
            <button onClick={() => this.changeState()}>Increment</button>
            <button onClick={() => this.changeState(-1)}>Decrement</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeState(amount) {
    this.setState({ count: this.state.count + 1 });
  }
}
