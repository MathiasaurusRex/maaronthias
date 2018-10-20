import React, { Component } from "react";

class GameForeground extends Component {
  render() {
    return <div className="game-foreground">{this.props.children}</div>;
  }
}

export default GameForeground;
