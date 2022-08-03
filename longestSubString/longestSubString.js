var lengthOfLongestSubstring = function(s) {
  //I - str, O - num, C - s contains spaces,digits special chars
  let hash = {};
  let left = 0, right = 0, result = 0;
  while(left < s.length - result && right < s.length) {
    let key = s.charCodeAt(right);
    if(hash[key] === undefined) {
      hash[key] = true;
      right += 1;
      result = Math.max(right - left, result);
    } else {
      result = Math.max(right - left, result);
      left += 1;
      right = left;
      hash = {};
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("")) // 0
console.log(lengthOfLongestSubstring(" ")) // 1
console.log(lengthOfLongestSubstring(" .")) // 2
console.log(lengthOfLongestSubstring(" .!....")) // 3
console.log(lengthOfLongestSubstring("1123411")) // 4
