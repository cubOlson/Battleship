## BATTLESHIP

classes: HumanPlayer, Board, BattleshipGame

getMove function takes cb, answer
    passing the answer to cb

### UI Game board
10x10 squares, flexible num of rows and columns (??)
Board class keeps track of the game state
renders grid game board (2d array)
each element in a row is one of three things:
- a ship "s"
- open water "null"
- ABA (already been attacked) "x"

Board has to remember game state and change it based on attacks
first we have to decide:
*how many rows? columns? ships?*

**Board class properties:**
numRows 5
numCols 5
numShips 5

**Board class methods:**

populateGrid() => creates grid using numRows, numCols and numShips, set it to this.grid
call populateGrid upon initialization.grid
"s="  unscathed ship
null = open water
"x" = missed hit
"h" =  hit ship destroyed ship or ABA

display() => prints gameboard with marks on spaces that have been fired upon (2d array)

count() => return number of unscathed ships

isValidMove() => return boolean

isGameOver() => if (unscathed ships === 0) return true else  false

attack() => take in an attack position [row, col] and update this.grid depending on whether there is an "s" "x" or null value at the attack position.

if "s" => "s" becomes "h" for hit

else => that position becomes "x"

rows = 5
columns = 5

//randomIndex = Math.floor(Math.random() * 4)

empty array = []
for (let i = 0; i < rows; i++){
    let randomIndex = Math.floor(Math.random() * 4)
    let newArray = [];
    for (let j = 0; j < columns; j++){
        if (j === randomIndex){
            newrray.push('s');
        } else {
        newArray.push(null);
        }
    }
    array.push(newArray);
}


1st function = [null, null, null, null, null]
array.push(result)
