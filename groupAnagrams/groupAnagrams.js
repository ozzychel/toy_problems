// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
  //OPTIMIZED | O(n) time | O(n) space worst
  let hash = {};
  strs.forEach(str => {
    let sorted = str.split('').sort().join('');
    if(hash[sorted] === undefined) hash[sorted] = [str];
    else hash[sorted].push(str);
  })
  return [...Object.values(hash)];

  //BRUTEFORCE | O(n^2) time | O(n) space
  // let results = [];
  // let visited = strs.slice();
  // for(let i = 0; i < strs.length; i++) {
  //   if(visited[i] !== 0) {
  //     let word = strs[i];
  //     let chunk = [word];
  //     for(let j = i+1; j < strs.length; j++) {
  //       if(visited[j] !== 0) {
  //         let tested = strs[j].split('').sort().join('')
  //         let sortedWord = word.split('').sort().join('')
  //         if(tested === sortedWord) {
  //           chunk.push(strs[j])
  //           visited[j] = 0;
  //         }
  //       }
  //     }
  //     visited[i] = 0;
  //     results.push(chunk);
  //   }
  // }
  // return results;
};

console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["", "bat"])) // [[""],["bat"]]
console.log(groupAnagrams(["",""])) // [["",""]]