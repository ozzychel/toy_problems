/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. Avoid duplicated values.
 *
 */

const allAnagrams = (string) => {
  const result = new Map();
  function getAnagram(newStr, str){
    if(!str.length && !result.has(newStr)) result.set(newStr, true);
    for (let i = 0; i < str.length; i++){
      getAnagram(newStr + str[i], str.slice(0,i) + str.slice(i+1));
    }
  }
  getAnagram('', string);
  return Array.from(result.keys());
};

var TaskToBeExecuted = function() {

  console.log(allAnagrams("a")) // ['a']
  console.log(allAnagrams("aa")) // ['aa']
  console.log(allAnagrams("ab")) // ['ab','ba']
  console.log(allAnagrams("aba")) // ['aba', 'aab', 'baa']
  console.log(allAnagrams("abc")) // ['abc','acb','bac','bca','cab','cba']
  console.log(allAnagrams('abca')) //["abca", "abac", "acba", "acab", "aabc", "aacb", "baca", "baac", "bcaa", "caba", "caab", "cbaa"]
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