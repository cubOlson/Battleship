const Human = require('./humanPlayer.js')

class Board {
  constructor(numRows, numCols, numShips) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().

  }

  populateGrid() {
    this.grid = [];
for (let i = 0; i < this.numRows; i++){
    let randomIndex = Math.floor(Math.random() * 4)
    let newArray = [];
    for (let j = 0; j < this.numCols; j++){
        if (j === randomIndex){
            newArray.push('s');
        } else {
        newArray.push(null);
        }
    }
    this.grid.push(newArray);
}
return this.grid;
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
  }

  display() {

    this.grid.forEach(row => {
      let displayRow = [...row];
      if (displayRow.includes("s")) {
        let index = displayRow.indexOf("s");
        displayRow.splice(index, 1, null);
        console.log(displayRow);
        console.log("\n");
      }
    })
  }

    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()

  count() {
    let shipCount = this.numShips;
    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        let el = row[i];
        if (el === "h") {
          shipCount--;
        }
      }
    }
    return shipCount;
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(move) {
  let [x, y] = move;
  if (x >= 0 && x <= this.numRows - 1 && y >= 0 && y <= this.numCols) {
    return true;
  }
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    return false;
  }

  isGameOver() {
    if (this.count() === 0) {
      return true;
    }
    return false;
  }

  attack(move) {
    if (this.isValidMove(move)) {
      let [x, y] = move;
      if (this.grid[x][y] === "s") {
        this.grid[x][y] = "h";
        return this.grid;
      }
      else if (this.grid[x][y] === null) {
        this.grid[x][y] = "x";
        return this.grid;
      }
    }
    else {
    console.log("Invalid Move");
    return this.grid;
    }
  }
}




  // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.

const test = new Board(5, 5, 5);
test.populateGrid();
test.display();
console.log(test.attack([3, 4]));
console.log(test.count());
console.log(test.isGameOver());


module.exports = { Board }
