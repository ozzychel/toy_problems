// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  // OPTIMIZED | O(n)
  let hash = {}
  for(let i = 0; i < nums.length; i++) {
      //set diff
      //check if diff in map
      //if not add i:ind to hash
      //if yes > return [i,hash[key]]
      let diff = target - nums[i]
      if(hash[diff] === undefined) {
          hash[nums[i]] = i;
      } else {
          return [hash[diff], i]
      }
  }

  // BRUTEFORCE | O(n^2)
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i+1; j < nums.length; j++) {
  //         if(nums[i] + nums[j] === target) return [i,j]
  //     }
  // }
  //   return []
};

console.log(twoSum([2,7,11,15], 9)) //[0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
