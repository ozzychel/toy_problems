/*
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered  if they are safe(0) or  if they must be avoided(1).
Example: input- [0,1,0,0,0,1,0]
They could follow these two paths: 0->2->4->6 or 0->2->3->4->6, first path takes 3 jumps, second takes 4 jumps, so output is 3
*/

const jumpingOnClouds = (arr) => {
  let count = 0;
  debugger;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) i++;
    count++;
  }
  return count;
}

console.log(jumpingOnClouds([0,0])) // 1
console.log(jumpingOnClouds([0,1,0])) // 1
console.log(jumpingOnClouds([0,1,0,0,0])) //2
console.log(jumpingOnClouds([0,0,1,0,0])) //3
console.log(jumpingOnClouds([0,1,0,0,0,1,0])) //3
console.log(jumpingOnClouds([0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0])) // 28