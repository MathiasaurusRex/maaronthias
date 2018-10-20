import React, { Component } from "react";

class GameActionContainer extends Component {
  render() {
    return <div className="game-action-container">{this.props.children}</div>;
  }
}

export default GameActionContainer;
