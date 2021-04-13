/*
We define a magic square to be an nxn matrix of distinct positive integers from 1 to n2  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

You will be given a 3x3  matrix s of integers in the inclusive range [1,9] . We can convert any digit a to any other digit b in the range [1,9] at cost of [a-b] . Given s, convert it into a magic square at minimal cost. Return cost

Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].
*/

function formingMagicSquare(s) {
  // I - matrix O - num C - none E - none
  // magic square has only 8 possible permutations
  // which is in fact rotation/reflection of 1 pattern
  // store each permutation in squares array as 1d array
  // transform s into 1d array to decrease time complexity
  // for each permutation
  // iterate through each element and compare to relevant in original square
  // calculate localCost of converting for each square
  // check if total cost < local cost, if so update total cost
  // return total cost
  let squares = [
    [8,1,6,3,5,7,4,9,2], [6,1,8,7,5,3,2,9,4], [4,9,2,3,5,7,8,1,6], [2,9,4,7,5,3,6,1,8],
    [8,3,4,1,5,9,6,7,2], [4,3,8,9,5,1,2,7,6], [6,7,2,1,5,9,8,3,4], [2,7,6,9,5,1,4,3,8]
  ]
  let current = [];
  let cost = +Infinity;
  for(let inner of s) {
    current = current.concat(inner);
  }
  for(let i = 0; i < squares.length; i++) {
    let local = 0;
    for(let j = 0; j < squares[i].length; j++) {
      local += Math.abs(squares[i][j] - current[j]);
    }
    cost = Math.min(cost, local);
  }
  return cost;
}

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])) //1
console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]])) //4
console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]])) //7
console.log(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]])) //14

