// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
  const testIndex = (ind) => {
    for(let i = 0; i < strs.length-1; i++) {
      if((strs[i][ind] !== strs[i+1][ind]) || !strs[i][ind] || !strs[i+1][ind]) return false;
    }
    return true;
  }
  var result = ''
  strs.sort((a,b) => a.length - b.length)
  var i = 0;
  var j = 0;
  for(let i = 0; i < strs[0].length; i++) {
    if(testIndex(j)) {
      result += strs[0][j];
      j++
    } else {
      return result;
    }
  }
  return result;
};

console.log(longestCommonPrefix(['aacd','acv',''])) // ''
console.log(longestCommonPrefix(['','',''])) // ''
console.log(longestCommonPrefix(['ab','abc',''])) // ''
console.log(longestCommonPrefix(['a','abc','a'])) // 'a'
console.log(longestCommonPrefix(['aabbccdd', 'aabasa', 'aacvz'])) // 'aa'
console.log(longestCommonPrefix(['flower', 'flood', 'flambe'])) // 'fl'