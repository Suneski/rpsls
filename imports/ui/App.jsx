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
        <nav>
          <p className="title">Rock-Paper-Scissors-Lizard-Spock</p>
          <p className={this.state.resultVisibility} id="score">
            Your Score: {this.state.playerScore} Computer's Score: {this.state.computerScore}
          </p>
        </nav>

        <div>
          <p>Choose Your Weapon</p>
          <select onChange={ (evt) => this.playerSelect(evt) }>
            <option value="Rock">Rock</option>
            <option value="Paper">Paper</option>
            <option value="Scissors">Scissors</option>
            <option value="Lizard">Lizard</option>
            <option value="Spock">Spock</option>
          </select>
          <button onClick={ () => this.playGame() }>Play</button>
        </div>

        <div className={this.state.resultVisibility}>

          <div className="selection-zone">
            <div className="selection player-selection">
              <p>Your Pick: {this.state.playerDecision}</p>
              <img src={this.state.playerDecisionImg} alt="player choice"/>
            </div>

            <div className="selection versus">
              <img src="images/versus.jpg" alt="versus"/>
            </div>

            <div className="selection computer-selection">
              <p>Computer's Pick: {this.state.computerDecision}</p>
              <img src={this.state.computerDecisionImg} alt="computer choice"/>
            </div>
          </div>


          <p className="result">{this.state.result}</p>
        </div>
      </div>
    );
  }
}
