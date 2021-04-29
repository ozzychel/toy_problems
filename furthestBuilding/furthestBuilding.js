/*
You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building i to building i+1 (0-indexed),

-If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
-If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.
*/

var furthestBuilding = function(heights, bricks, ladders) {
  let queue = Array.from({ length: ladders }).fill(0);
  for(var i = 1; i < heights.length; i++) {
    let diff = heights[i] - heights[i - 1];
    if(diff > 0) {
      if(diff > queue[0]) {
        let curr = queue.length - 1 ;
        while(curr >= 0 && queue[curr] > diff) curr--;
        bricks -= queue.shift();
        queue.splice(curr, 0, diff);
      } else {
        bricks -= diff;
      }
      if(bricks < 0) return i - 1;
    }
  }
  return i - 1;
};

var TaskToBeExecuted = function() {

  console.log(furthestBuilding([14,3,19,3], 17, 0)) // 3
  console.log(furthestBuilding([4,2,7,6,9,14,12], 5, 1)) // 4
  console.log(furthestBuilding([1,5,1,2,3,4,10000], 4, 1)) // 5
  console.log(furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2)) //7

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