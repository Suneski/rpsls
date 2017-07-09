import { actions, store } from './Store.js';

const GameMechanics = {

  rps(me, computer) {
    let result;
    // ROCK RESULTS
    if (me === 'Rock' && computer === 'Scissors') {
      result = 'Rock crushes Scissors - You win';
    }
    else if (me === 'Rock' && computer === 'Lizard') {
      result = 'Rock crushes Lizard - You win';
    }
    else if (me === 'Rock' && computer === 'Paper') {
      result = 'Rock is covered by Paper - You lose';
    }
    else if (me === 'Rock' && computer === 'Spock') {
      result = 'Rock is vaporized by Spock - You lose';
    }

    // SCISSORS RESULTS
    else if (me === 'Scissors' && computer === 'Paper') {
      result = 'Scissors cut Paper - You win.';
    }
    else if (me === 'Scissors' && computer === 'Lizard') {
      result = 'Scissors decapitated the Lizard - You win';
    }
    else if (me === 'Scissors' && computer === 'Rock') {
      result = 'Scissors are crushed by the Rock - You lose';
    }
    else if (me === 'Scissors' && computer === 'Spock') {
      result = 'Scissors are crushed by Spock - You lose';
    }

    // PAPER RESULTS
    else if (me === 'Paper' && computer === 'Rock') {
      result = 'Paper covers Rock - You win.';
    }
    else if (me === 'Paper' && computer === 'Spock') {
      result = 'Paper disproves Spock - You win';
    }
    else if (me === 'Paper' && computer === 'Scissors') {
      result = 'Paper is cut by Scissors - You lose';
    }
    else if (me === 'Paper' && computer === 'Lizard') {
      result = 'Paper is eaten by Lizard - You lose';
    }

    // SPOCK RESULTS
    else if (me === 'Spock' && computer === 'Scissors') {
      result = 'Spock smashes Rock - You win.';
    }
    else if (me === 'Spock' && computer === 'Rock') {
      result = 'Spock vaporizes Rock - You win';
    }
    else if (me === 'Spock' && computer === 'Paper') {
      result = 'Spock is disproved by Paper - You lose';
    }
    else if (me === 'Spock' && computer === 'Lizard') {
      result = 'Spock is poisoned by Lizard - You lose';
    }

    // LIZARD RESULTS
    else if (me === 'Lizard' && computer === 'Spock') {
      result = 'Lizard poisons Spock - You win.';
    }
    else if (me === 'Lizard' && computer === 'Paper') {
      result = 'Lizard eats Paper - You win';
    }
    else if (me === 'Lizard' && computer === 'Rock') {
      result = 'Spock is disproved by Paper - You lose';
    }
    else if (me === 'Lizard' && computer === 'Scissors') {
      result = 'Spock is poisoned by Lizard - You lose';
    }

    // ELSE-CASE
    else if (me === computer) {
      result = 'It\'s a draw!';
    }
    else {
      result = "Error! Try again!"
    }

    console.log("me: ", me);
    console.log("computer: ", computer);
    console.log(result);

    store.dispatch({
      type: actions.RESULT,
      result: result,
    });

  }
}

export default GameMechanics;
