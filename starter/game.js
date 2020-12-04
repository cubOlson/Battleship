const board = require("./board.js")

class BattleshipGame {
  constructor(humanPlayer, board) {
    this.humanPlayer = humanPlayer;
    this.board = new Board(5, 5, 5);
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
  }

  playTurn() {
    this.displayStatus();
    this.humanPlayer.getMove(processMove);
    // TODO: Display the state of the game and ask for the users input.
  }

  displayStatus() {
    this.board.display();
    // TODO: Display the current state of the game to the player.
  }

  processMove(move) {
    if (this.isValidMove(move)) {
      this.board.attack(move);
      turns++;
      if (this.board.isGameOver()) {
        this.displayStatus();
        console.log("Game Over");
      } else {
        this.playTurn();
      }
    }
    else {
      console.log("Error: Invalid Move")
    }

    }
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.

module.exports = BattleshipGame;

playTurn();


// const test = new Board(5, 5, 5);
// test.populateGrid();
// test.display();
// console.log(test.attack([3, 4]));
// console.log(test.count());
// console.log(test.isGameOver());
