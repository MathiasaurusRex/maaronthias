import React, { Component } from "react";

import GameBackground from "./GameBackground";
import GameForeground from "./GameForeground";
import GameCharacter from "./GameCharacter";
import GamePlayField from "./GamePlayField";
import GameStoryBlock from "./GameStoryBlock";
import GameActionContainer from "./GameActionContainer";
import GameAction from "./GameAction";

class GameCard extends Component {
  render() {
    return (
      <GameBackground>
        <GameForeground>
          <GameCharacter />
          <GamePlayField>
            <GameStoryBlock copy="You walk into the room. The cobblestone beneath your feet seems loose enough to {move}. You see a {Skeleton} in the corner and there is a {Jeweled Knife} lodged inside of it's rib cage" />
            <GameActionContainer>
              <GameAction action="Go back through the door" />
              <GameAction action="Investigate the cobblestone beneath your feet" />
              <GameAction action="Investigate the skeleton" />
              <GameAction action="Remove the Jeweled Knife" />
            </GameActionContainer>
          </GamePlayField>
        </GameForeground>
      </GameBackground>
    );
  }
}

export default GameCard;
