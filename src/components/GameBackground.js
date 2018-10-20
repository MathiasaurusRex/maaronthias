import React, { Component } from "react";

class GameBackground extends Component {
  render() {
    return <div className="game-background">{this.props.children}</div>;
  }
}

export default GameBackground;
