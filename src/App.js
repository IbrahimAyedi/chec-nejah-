import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
  };
  handleShow = () => this.setState({ isShow: !this.state.isShow });
  handlePlus = () => this.setState({ count: this.state.count + 1 });
  handleMois = () =>
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");

  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    // setInterval(this.handlePlus, 1000);

    return (
      <div className="App">
        <button onClick={this.handleShow}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>
        {this.state.isShow && (
          <>
            <h1>{this.state.count}</h1>

            <button onClick={this.handlePlus}>+</button>
            <button onClick={this.handleMois}>-</button>
          </>
        )}
      </div>
    );
  }
}
