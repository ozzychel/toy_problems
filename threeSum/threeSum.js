// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
  const results = [];
  nums.sort((a, b) => (a - b));
  for (let i = 0; i < nums.length - 2; i++) {
    //if same number continue to avoid duplicated results
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //set left and right pointers
    let left = i + 1;
    let right = nums.length - 1;
    //move pointers towards each other until met
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        //left number is too small, adjust pointer
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        //right number is too big, adjust pointer
        right--;
      } else {
        //condition is met, sum of all three is 0, add to results
        results.push([nums[i], nums[left], nums[right]]);
        //adjust pointers if same number to avoid dupes
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        //adjust both pointers once
        left++;
        right--;
      }
    }
  }
  //return triplets
  return results;
};

console.log(ThreeSum([-1,0,1,2,-1,-4]))// [ [-1,-1,2], [-1, 0, 1]]
console.log(ThreeSum([0,1,1]))// [ ]
console.log(ThreeSum([0,0,0]))// [0,0,0]