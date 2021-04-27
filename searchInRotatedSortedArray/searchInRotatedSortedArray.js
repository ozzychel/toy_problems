/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
*/

var search = function(nums, target) {
  // O(logN) time | O(1) space
  for (let left = 0, right = nums.length - 1; left <= right;) {
    let mid = Math.floor((left + right) / 2);
    let num;
    if (nums[mid] === target) return mid;
    if((nums[0] > target) === (nums[0] > nums[mid])) {
      num = nums[mid];
    } else {
      if(nums[0] > target) num = -Infinity;
      else num = Infinity;
    }
    if (num < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;

  // O(N) time | O(N) space
  // if(nums.length === 1) return nums[0] === target ? 0 : -1;
  // let indArr = Array.from({length: nums.length}, (_, i) => i);
  // indArr = indArr.sort((a,b) => nums[a] - nums[b])
  // let left = 0, right = nums.length - 1;
  // while(left <= right) {
  //   let mid = Math.floor(left + ((right-left)/2));
  //   let index = indArr[mid];
  //   if(nums[index] === target) return index;
  //   if(nums[index] > target) right = mid - 1;
  //   if(nums[index] < target) left = mid + 1;
  // }
  // return -1;

};

console.log(search([1], 2)) // -1
console.log(search([14,15,16,17,10,11,12], 12)) // 6
console.log(search([4,5,6,7,0,1,2], 3)) // -1