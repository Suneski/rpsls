import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import GameMechanics from './GameMechanics.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playerDecision: 'rock',
      computerDecision: '',
    };
  }

  playerSelect(evt) {
    this.setState({
      playerDecision: evt.target.value,
    })
  }

  playGame() {
    let options = ["rock", "paper", "scissors", "spock", "lizard"];
    let computerSelection = options[Math.floor(Math.random() * 5)]
    GameMechanics.rps(this.state.playerDecision, computerSelection);
  };

  render() {
    return (
      <div className="container">
        <p>Rock-Paper-Scissors-Spock-Lizard</p>
        <select onChange={ (evt) => this.playerSelect(evt) }>
          <option value="rock">Rock</option>
          <option value="paper">Paper</option>
          <option value="scissors">Scissors</option>
          <option value="spock">Spock</option>
          <option value="lizard">Lizard</option>
        </select>
        <button onClick={ () => this.playGame() }>Play</button>
      </div>
    );
  }
}
