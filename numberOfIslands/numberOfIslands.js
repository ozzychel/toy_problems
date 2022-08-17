// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

var numIslands = function(grid) {
  // create matrix to mark visited elements fill with 0
  // iterate over the grid, for every element
    //check if element is land('1') and not yet visited (vis[r][c] is 1)
    // if no: continue
    // if yes: checkArea around found land using helper func

  // helper function receives [r] and [c]
  // base case: check if coordinates beyond boundaries or marked visited
  // mark coordinates as visited with 1
  // recursively call func for nearby coordinates (vertically and horizontally)
  let vis = Array.from({length: grid.length}, (_,i) => Array.from({length:grid[0].length}, (_,j) => 0))
  let result = 0;

  const checkArea = (row, col) => {
    //base case
    if(row >= grid.length || row < 0 || col >= grid[row].length || col < 0 || vis[row][col] === 1 || grid[row][col] !== '1') {
      return 0;
    }
    vis[row][col] = 1;
    return 0 + checkArea(row, col + 1) + checkArea(row + 1, col)
      + checkArea(row, col - 1) + checkArea(row - 1, col)
  }

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === '1' && vis[row][col] === 0) {
        result++;
        checkArea(row, col);
      }
    }
  }
  return result;
};

 console.log(numIslands([
    ['0','0','0'],
    ['0','1','0'],
    ['0','1','0']
  ])) // 1
  console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])) // 1
  console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])) // 3