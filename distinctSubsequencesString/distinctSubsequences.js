/*
Given two strings s and t, return the number of distinct subsequences of s which equals t.

A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).

It is guaranteed the answer fits on a 32-bit signed integer.
*/

var numDistinct = function(s, t) {
  const dp = []
  for (let i = 0; i <= s.length; i++) dp.push([1]);
  for (let j = 1; j <= t.length; j++) dp[0][j] = 0;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      let currRes = 0;
      if (s[i - 1] === t[j - 1]) currRes = dp[i - 1][j] + dp[i - 1][j - 1];
      else currRes = dp[i - 1][j];
      dp[i][j] = currRes;
    }
  }
  return dp[s.length][t.length];
};

// var numDistinct = function(s, t) {
//   var dp = Array.from({length: s.length}).fill(0).map(_ => Array(t.length));
//   return helper(s, t, 0, 0, dp);
// };

// var helper = function (s, t, sIndex, tIndex, dp) {
//   if (tIndex === t.length) return 1;
//   if (sIndex === s.length) return 0;
//   if (dp[sIndex][tIndex] === undefined) {
//     if (s[sIndex] === t[tIndex]) {
//       dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex + 1, dp) + helper(s, t, sIndex + 1, tIndex, dp);
//     } else {
//       dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex, dp);
//     }
//   }
//   return dp[sIndex][tIndex];
// };

var TaskToBeExecuted = function() {
  console.log(numDistinct("a", "r")) // 0
  console.log(numDistinct("r", "r")) // 1
  console.log(numDistinct("rabbbit", "rabbit")) // 3
  console.log(numDistinct("babgbag", "bag")) // 5
};

function StandardBenchmark(toMeasure,repeatTimes){
  if(typeof(repeatTimes) != "number"){
      repeatTimes = 1;
  }

  if(typeof(toMeasure) === "function"){
      var start_status = performance.now();
      var total_taken = 0;
      for(var i = 0;i < repeatTimes;i++){
          var startTimeSubtask = performance.now();
          toMeasure.call();
          var endTimeSubtask = performance.now();
          total_taken += (endTimeSubtask -startTimeSubtask);
      }
      var final_status = performance.now();
  }

  return {
      totalMilliseconds: (final_status - start_status),
      averageMillisecondsPerTask: total_taken / repeatTimes
  };
}

var TestResult = new StandardBenchmark(TaskToBeExecuted,1);
console.log(TestResult);