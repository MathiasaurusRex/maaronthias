import React, { Component } from "react";

class GameAction extends Component {
  render() {
    return <button className="game-action">{this.props.action}</button>;
  }
}

export default GameAction;
