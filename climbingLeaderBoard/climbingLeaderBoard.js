/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

-The player with the highest score is ranked number 1  on the leaderboard.
-Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Complete the climbingLeaderboard function to return ay of players rank after each new score
*/

function climbingLeaderboard (scores, alice) {
   let results = [];
   let unique = [...new Set(scores)];
   for(let score of alice) {
     if(score > unique[0]) results.push(1);
     else if (score < unique[unique.length - 1]) results.push(unique.length + 1);
     else results.push(rankBinarySearch(score, unique))
   }
   return results;
}

function rankBinarySearch (score, nums) {
  let left = 0, mid = 0, right = nums.length - 1;
  while (true) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === score) return mid + 1;
    else if (nums[mid] > score && nums[mid + 1] < score) return mid + 2;
    else if (nums[mid] < score && nums[mid - 1 > score]) return mid - 1;
    if (score < nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
}

console.log(climbingLeaderboard([10], [15])) // [1]
console.log(climbingLeaderboard([10], [5])) // [2]
console.log(climbingLeaderboard([20, 10], [15])) // [2]
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [15, 25, 50, 120])) // [5,4,2,1]
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90,102])) // [6,5,4,2,1]