import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import * as ENVIRONMENTS from "./data/environments";

import GameCard from "./components/GameCard";

// Game Components

class App extends Component {
  render() {
    return (
      <div className="App">
        {Object.keys(ENVIRONMENTS.ENVIRONMENTS).map(item => {
          console.log(ENVIRONMENTS.ENVIRONMENTS[item]);
        })}
        <GameCard />
      </div>
    );
  }
}

export default App;
