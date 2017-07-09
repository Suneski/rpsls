const GameMechanics = {

  rps(me, computer) {
    let result;
    // ROCK RESULTS
    if (me === 'rock' && computer === 'scissors') {
      result = 'Rock crushes scissors - You win';
    }
    else if (me === 'rock' && computer === 'lizard') {
      result = 'Rock crushes lizard - You win';
    }
    else if (me === 'rock' && computer === 'paper') {
      result = 'Rock is covered by paper - You lose';
    }
    else if (me === 'rock' && computer === 'spock') {
      result = 'Rock is vaporized by Spock - You lose';
    }

    // SCISSORS RESULTS
    else if (me === 'scissors' && computer === 'paper') {
      result = 'Scissors cut paper - You win.';
    }
    else if (me === 'scissors' && computer === 'lizard') {
      result = 'Scissors decapitated the lizard - You win';
    }
    else if (me === 'scissors' && computer === 'rock') {
      result = 'Scissors are crushed by the rock - You lose';
    }
    else if (me === 'scissors' && computer === 'spock') {
      result = 'Scissors are crushed by Spock - You lose';
    }

    // PAPER RESULTS
    else if (me === 'paper' && computer === 'rock') {
      result = 'Paper covers rock - You win.';
    }
    else if (me === 'paper' && computer === 'spock') {
      result = 'Paper disproves Spock - You win';
    }
    else if (me === 'paper' && computer === 'scissors') {
      result = 'Paper is cut by scissors - You lose';
    }
    else if (me === 'paper' && computer === 'lizard') {
      result = 'Paper is eaten by lizard - You lose';
    }

    // SPOCK RESULTS
    else if (me === 'spock' && computer === 'scissors') {
      result = 'Spock smashes rock - You win.';
    }
    else if (me === 'spock' && computer === 'rock') {
      result = 'Spock vaporizes - You win';
    }
    else if (me === 'spock' && computer === 'paper') {
      result = 'Spock is disproved by paper - You lose';
    }
    else if (me === 'spock' && computer === 'lizard') {
      result = 'Spock is poisoned by lizard - You lose';
    }

    // LIZARD RESULTS
    else if (me === 'lizard' && computer === 'spock') {
      result = 'Lizard poisons Spock - You win.';
    }
    else if (me === 'lizard' && computer === 'paper') {
      result = 'Lizard eats paper - You win';
    }
    else if (me === 'lizard' && computer === 'rock') {
      result = 'Spock is disproved by paper - You lose';
    }
    else if (me === 'lizard' && computer === 'scissors') {
      result = 'Spock is poisoned by lizard - You lose';
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
  }
}

export default GameMechanics;
