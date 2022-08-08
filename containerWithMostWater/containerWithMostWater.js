// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

var maxArea = function(height) {
  //OPTIMIZED | O(n) space | O(1) time
  let maxArea = -Infinity;
  let left = 0, right = height.length - 1;
  while(left < right) {
    let min = Math.min(height[left], height[right]);
    let area = min * (right - left);
    maxArea = Math.max(area, maxArea);
    if(height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;

  //BRUTEFORCE | O(n^2) time | O(1) space
  // iterate over the array, each step
  // move second pointer to the right and calculate the max area
  // if current maxArea is bigger than global: update global
  // let maxArea = -Infinity;
  // for(let i = 0; i < height.length; i++) {
  //   for(let j = i + 1; j < height.length; j++) {
  //     let min = Math.min(height[i], height[j]);
  //     let area = min * (j - i);
  //     maxArea = Math.max(maxArea, area)
  //   }
  // }
  // return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) //49
console.log(maxArea([[1,1]])) //1