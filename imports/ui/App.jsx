import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import GameMechanics from './GameMechanics.jsx';
import { actions, store } from './Store.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.subscribe = store.subscribe(() => this.setState(store.getState()));
  }

  playerSelect(evt) {
    store.dispatch({
      type: actions.PLAYER_DECISION,
      playerDecision: evt.target.value,
    })
  }

  playGame() {
    let options = ["rock", "paper", "scissors", "spock", "lizard"];
    let computerDecision = options[Math.floor(Math.random() * 5)]
    store.dispatch({
      type: actions.COMPUTER_DECISION,
      computerDecision: computerDecision,
    });
    GameMechanics.rps(this.state.playerDecision, computerDecision)
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
        <p>Your Pick: {this.state.playerDecision}</p>
        <p>Computer's Pick: {this.state.computerDecision}</p>
      </div>
    );
  }
}
