var combinationSum = function (candidates, target) {
  let results = [];
  candidates = candidates.filter(el => el <= target).sort((a, b) => a - b);
  function backtrack(tempList, remain, start) {
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remain) break;
      if (candidates[i] === remain) results.push([...tempList, candidates[i]]);
      else backtrack([...tempList, candidates[i]], remain - candidates[i], i);
    }
  }
  backtrack([], target, 0);
  return results;
};

console.log(JSON.stringify(combinationSum([2], 1))) // []
console.log(JSON.stringify(combinationSum([1], 1))) // [[1]]
console.log(JSON.stringify(combinationSum([1], 2))) // [[1,1]]
console.log(JSON.stringify(combinationSum([2, 3, 6, 7, 10, 20], 7)) )// [[2,2,3],[7]]
console.log(JSON.stringify(combinationSum([2, 3, 5], 8))) // [[2,2,2,2],[2,3,3],[3,5]]