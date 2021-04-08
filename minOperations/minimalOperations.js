/*
You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e. 0 <= i < n).

In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.

Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equa
*/

var minOperations = function(n) {
  // OPTIMAL
  const length = n % 2 === 0 ? n / 2 : (n - 1) / 2;
  let result = 0;
  for(let i = 0; i < length; i++) {
    result += n - (2 * i) - 1;
  }
  return result;

  // NAIVE
  // let arr = Array.from({length: n}, (_, i) => (2 * i) + 1);
  // let result = 0, x = 0, y = n - 1;
  // while(x < y) {
  //   if(arr[x] === n) x++;
  //   if(arr[y] === n) y--;
  //   if(arr[x] < n && arr[y] > n) arr[x]++, arr[y]--, result++;
  // }
  // return result;

  // RECURSIVE
  // if(n === 1) return 0;
  // if(n === 2) return 1;
  // if(n % 2 === 0) return minOperations(n-1)*2 - minOperations(n-2) + 1;
  // else return minOperations(n-1)*2 - minOperations(n-2);
};

console.log(minOperations(1)) //0
console.log(minOperations(2)) //1
console.log(minOperations(3)) //2
console.log(minOperations(4)) //4
console.log(minOperations(5)) //6
console.log(minOperations(6)) //9
console.log(minOperations(7)) //12
console.log(minOperations(108)) //2916