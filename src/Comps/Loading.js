import React, { Component } from "react";
import spinner from "./spinner.gif";
import spinner_2 from "./spinner_2.gif";

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="container text-center">
          <img
            src={this.props.Dmode === "light" ? spinner : spinner_2}
            alt="loading"
          />
        </div>
      </>
    );
  }
}
