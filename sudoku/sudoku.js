// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

function sudoku(grid) {
  //I - grid O - bool
   //check all vertical
   //check all horizontal
   //check all squares
   const checkArr = (arr) => {
     let map = {};
     for(let i = 0; i < arr.length; i++) {
       if(arr[i] === '.') continue
       else if(map[arr[i]] === undefined) map[arr[i]] = arr[i];
       else return false
     }
     return true;
   }

   for(let i = 0; i < grid.length; i++) {
     if(!checkArr(grid[i])) return false;
   }

   for(let x = 0; x < grid.length; x++) {
     let vertical = [];
     for(let y = 0; y < grid.length; y++) vertical.push(grid[y][x])
     if(!checkArr(vertical)) return false
   }

   for(let x = 0; x <= grid.length-3; x+=3) {
     let square = [];
     for(let y = 0; y <= grid.length-3; y+=3) {
       square.push(...grid[x].slice(y,y+3), ...grid[x+1].slice(y,y+3), ...grid[x+2].slice(y,y+3))
       if(!checkArr(square)) return false;
       square = [];
     }
   }
   return true;
}

console.log(sudoku(
  [ [".",".",".","1","4",".",".","2","."],
    [".",".","6",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".","1",".",".",".",".",".","."],
    [".","6","7",".",".",".",".",".","9"],
    [".",".",".",".",".",".","8","1","."],
    [".","3",".",".",".",".",".",".","6"],
    [".",".",".",".",".","7",".",".","."],
    [".",".",".","5",".",".",".","7","."]])) // true
    console.log(sudoku(
   [[".",".",".",".","2",".",".","9","."],
    [".",".",".",".","6",".",".",".","."],
    ["7","1",".",".","7","5",".",".","."],
    [".","7",".",".",".",".",".",".","."],
    [".",".",".",".","8","3",".",".","."],
    [".",".","8",".",".","7",".","6","."],
    [".",".",".",".",".","2",".",".","."],
    [".","1",".","2",".",".",".",".","."],
    [".","2",".",".","3",".",".",".","."]])) //false
