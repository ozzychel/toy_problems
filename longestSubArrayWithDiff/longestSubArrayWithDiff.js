/*
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
*/

function pickingNumbers(a) {
  // I-arr of nums O-num C-The answer will be >=2 E-none
  let arr = a.sort((a, b) => a - b);
  let result = 2;
  let left = 0;
  for(let right = left + 1; right <= arr.length; right++) {
    if(right === arr.length) result = Math.max(result, right - left);
    if(arr[right] - arr[left] > 1) {
      result = Math.max(result, right - left);
      if(arr[left+1] === arr[left]) while(arr[left] === arr[left+1]) left++;
      else left++;
      right = left;
    }
  }
  return result;
}


console.log(pickingNumbers([1,2])) //2 ([1,2])
console.log(pickingNumbers([4,6,5,3,3,1])) // 3 ([4,3,3])
console.log(pickingNumbers([1,2,2,3,1,2])) // 5 ([1,2,2,1,2])
console.log(pickingNumbers([1,1,2,2,4,4,5,5,5])) // 5 ([4,4,5,5,5])