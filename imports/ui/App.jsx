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
    let options = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
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
        <p>Rock-Paper-Scissors-Lizard-Spock</p>
        <select onChange={ (evt) => this.playerSelect(evt) }>
          <option value="Rock">Rock</option>
          <option value="Paper">Paper</option>
          <option value="Scissors">Scissors</option>
          <option value="Lizard">Lizard</option>
          <option value="Spock">Spock</option>
        </select>
        <button onClick={ () => this.playGame() }>Play</button>
        <div className={this.state.resultVisibility}>
          <p>Your Pick: {this.state.playerDecision}</p>
          <p>Computer's Pick: {this.state.computerDecision}</p>
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}
