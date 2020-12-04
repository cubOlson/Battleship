const readline = require("readline");

// const rl = readline.createInterface(process.stdin, process.stdout);

// // Reminder: rl.question is an asynchronous function
// rl.question("Whatever prompt you want to ask the user", (answer) => {
//   // Do stuff with that answer
//   // rl.close() // If you want to close the readline interface
// });


class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    rl.question("What's your move?", (answer) => {
      const [row, column] = answer.split(", ");
      const move = [row, column];
      processMove(move);
    })
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
  }

  processGameOver(isWon, turns) {
    if (isWon) {
      console.log(`You won in ${turns} turns!`)
    } else {
      console.log("You lose!")
    }
    this.rl.close();
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
  }
}

module.exports = HumanPlayer;
