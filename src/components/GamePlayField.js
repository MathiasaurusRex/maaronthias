import React, { Component } from "react";

class GamePlayField extends Component {
  render() {
    return <div className="game-background">{this.props.children}</div>;
  }
}

export default GamePlayField;
