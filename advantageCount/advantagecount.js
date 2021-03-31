// 1 <= A.length = B.length <= 10000
// 0 <= A[i] <= 10^9
// 0 <= B[i] <= 10^9

var advantageCount = function(A, B) {
  // create array of indexes with same length as B
  // sort array of indexes relevantly to sorting B descending
  // sort A array descending
  // compare numbers and add to result
  let arrOfInd = Array.from({length:B.length}, (_,i) => i);
  let result = [];
  let i = 0;
  let j = B.length - 1;
  debugger;
  arrOfInd.sort((a,b) => B[b] - B[a])
  A.sort((a,b) => b - a)
  for (let ind of arrOfInd)
    if(A[i] > B[ind]) result[ind] = A[i++]
    else result[ind] = A[j--]
  return result;
};

// BRUTE FORCE SOLUTION (VERY INEFFECTIVE)
// var advantageCount = function(A, B) {
//   if(A.length === 1) return A;
//   let result = A.slice();
//   let global = 0;
//   let variants = getPermutations(A);

//   for(let i = 0; i < variants.length; i++) {
//     let perm = variants[i];
//     let local = 0;
//     for(let j = 0; j < perm.length; j++) {
//       if(perm[j] > B[j]) local++;
//     }
//     if(local > global) {
//       result = perm.slice();
//       global = local;
//       if(global === A.length) return result;
//     }
//   }
//   return result;
// };

// var getPermutations = (nums) => {
//   const results = [];
//   const create = (arr, restArr) => {
//     if(arr.length === nums.length) results.push(arr);
//     for (let i = 0; i < restArr.length; i++) {
//      create(arr.concat(restArr[i]), restArr.slice(0, i).concat(restArr.slice(i+1)))
//     }
//   }
//   create([], nums)
//   return results;
// };

// ================LOGS===================
var TaskToBeExecuted = function() {

  console.log(advantageCount([1], [2])) // [1]
  console.log(advantageCount([2], [1])) // [2]
  console.log(advantageCount([4,6,9], [8,5,3])) // [9,6,4]
  console.log(advantageCount([2,5], [3, 1])) // [5, 2]
  console.log(advantageCount([2,7,11,15], [1,10,4,11])) // [2,11,7,15]
  console.log(advantageCount([12,24,8,32], [13,25,32,11])) // [24,32,8,12]
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