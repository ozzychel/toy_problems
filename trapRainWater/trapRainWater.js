var trapRainWater = function(height) {
  //OPTIMIZED (WITH POINTERS) | O(n) time | O(1) space
  let result = 0;
  let left = 0, right = height.length-1;
  let leftMax = 0, rightMax = 0;
  debugger;
  while(left < right) {
    if(height[left] < height[right]) {
      if(height[left] >= leftMax) leftMax = height[left]
      else result += leftMax - height[left]
      left++;
    } else {
      if(height[right] >= rightMax) rightMax = height[right]
      else result += rightMax - height[right]
      right--;
    }
  }
  return result;

  //OPTIMIZED | O(n) time | O(n) space
  // create 2 arrays to store maxHeight to the left of index and to the right
    // for leftArr iterate over the array
      //if i=0 push 0 to leftArr
      //else push maximum between previous index and last stored in leftArr
    // for rightArr iterate over the array backwards
      //if last index unshift 0
      //else unshift maximum between next index and last stored in rightArr[0]
  //iterate over the array again and calculate water for every block
  //calculate trapped water at current block: min(maxLeft,maxRight) - blockHeight
  //add trapped water to result
  // let leftArr = [];
  // let rightArr = [];
  // let result = 0;
  // for(let i = 0; i < height.length; i++) {
  //   if(i === 0) leftArr.push(0)
  //   else leftArr.push(Math.max(height[i-1], leftArr[leftArr.length-1]))
  // }
  // for(let j = height.length - 1; j >= 0; j--) {
  //   if(j === height.length - 1) rightArr.unshift(0);
  //   else rightArr.unshift(Math.max(height[j+1], rightArr[0]))
  // }
  // for(let i = 1; i < height.length-1; i++) {
  //   let waterLevel = Math.min(leftArr[i], rightArr[i]);
  //   let waterAtBlock = waterLevel - height[i]
  //   result += Math.max(waterAtBlock, 0);
  // }
  // return result;

  //BRUTE FORCE | O(n^2) time | O(1) space
  //iterate the array left to right starting with index 1 up to the length-1
  //initilize leftMax and rightMax to 0
  //for each element start loop to the left and to the right
    //looping left update left max comparing height[j] and leftMax
    //looping right update right max comparing height[k] and rightMax
  //add smaller of leftMax and rightMax minus current block height to result
  // let result = 0;
  // for(let i = 1; i < height.length-1; i++) {
  //   // debugger;
  //   let leftMax = 0, rightMax = 0;
  //   //search left
  //   for(let left = i - 1; left >= 0; left--) {
  //     leftMax = Math.max(height[left], leftMax)
  //   }
  //   //search right
  //   for(let right = i + 1; right < height.length; right++) {
  //     rightMax = Math.max(height[right], rightMax)
  //   }
  //   //water level will be smallest of leftMax and rightmax
  //   let waterLevel = Math.min(leftMax, rightMax);
  //   let waterAtBlock = waterLevel - height[i];
  //   //add 0 if negative, like [0,1,0]
  //   result += Math.max(waterAtBlock, 0);
  // }
  // return result;
};

console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trapRainWater([4,2,0,3,2,5])) // 9
console.log(trapRainWater([0,1,0])) // 0
console.log(trapRainWater([1,0,1])) // 1
console.log(trapRainWater([1,1,1])) // 0
console.log(trapRainWater([4,2,3])) // 1