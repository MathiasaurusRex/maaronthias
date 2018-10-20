import React, { Component } from "react";

// Game Components

class GameStoryBlock extends Component {
  render() {
    return (
      <div className="game-story-block">
        <h1>{this.props.copy}</h1>
      </div>
    );
  }
}

export default GameStoryBlock;
