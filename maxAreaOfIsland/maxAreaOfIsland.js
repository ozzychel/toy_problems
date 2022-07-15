// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

var maxAreaOfIsland = function(grid) {
  // I - matrix O - number
  // create visited matrix to store if square was already visited
  // arr[[bool],[bool]...]
  let visited = Array.from({length:grid.length}, (_, i) => Array.from({length:grid[0].length}, (_, j) => false));
  //iterate over the matrix with nested loop and for each square
  //use recursive checking function that returns number of connected
  //adjacent squares
  //for every square compare if current maxCount bigger than global
  let globalMax = 0;

  for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[row].length; col++) {
          globalMax = Math.max(globalMax, checkArea(row, col))
      }
  }

  function checkArea (row, col) {
      //recursive checking func
      //end case
      if(row < 0 || row >= grid.length ||
         col < 0 || col >= grid[row].length ||
         grid[row][col] === 0 || visited[row][col] === true) {
          return 0;
      }
      //mark this square as visited
      visited[row][col] = true;
      // return at least 1(if only one square. no adjacents)
      // plus check left-right-top-bottom squares(no diagonals)
      return 1 + checkArea(row, col-1) + checkArea(row, col+1)
               + checkArea(row-1, col) + checkArea(row+1, col)
  }

  return globalMax;
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])) // 6