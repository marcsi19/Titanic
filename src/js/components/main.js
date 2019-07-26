import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>Hello World!</div>;
  }
}
export default Main;
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
