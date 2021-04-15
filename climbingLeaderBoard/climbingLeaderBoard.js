/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

-The player with the highest score is ranked number 1  on the leaderboard.
-Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Complete the climbingLeaderboard function to return array of players rank after each new score
*/

function climbingLeaderboard(scores, alice) {
  let result = [];
  let uniqueScores = [...new Set(scores)];
  for (const score of alice) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankBinarySearch(score, uniqueScores));
    }
  }
  return result;
}
function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
  while (true) {
    let mid = Math.floor((start + end) / 2);
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}


console.log(climbingLeaderboard([10], [15])) // [1]
console.log(climbingLeaderboard([10], [5])) // [2]
console.log(climbingLeaderboard([20, 10], [15])) // [2]
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [15, 25, 50, 120])) // [5,4,2,1]
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90,102])) // [6,5,4,2,1]