import { createStore } from 'redux';

const actions = {
  PLAYER_DECISION: 'PLAYER_DECISION',
  COMPUTER_DECISION: 'COMPUTER_DECISION',
  RESULT: 'RESULT',
}

var initialState = {
  playerDecision: 'Rock',
  playerDecisionImg: 'images/Rock.png',
  resultVisibility: 'result-invisible',
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.PLAYER_DECISION:
      return Object.assign({}, state, {
        playerDecision: action.playerDecision,
        playerDecisionImg: "images/" + action.playerDecision + ".png",
      });

    case actions.COMPUTER_DECISION:
      return Object.assign({}, state, {
        computerDecision: action.computerDecision,
        computerDecisionImg: "images/" + action.computerDecision + ".png",
        resultVisibility: 'result-visible',
      });

    case actions.RESULT:
      return Object.assign({}, state, {
        result: action.result,
      });

    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {
  actions, store
};
