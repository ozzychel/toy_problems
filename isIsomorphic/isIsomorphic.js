// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function(s, t) {
  // iterate over str1 and try to recreate str2
  // each step check if str1[i] is present in hash
    // if yes: add hash[key] value to testString
    // if no:
      //check if str2[i] is one of the values in hash
        //if no: add str1[i]: str2[i] to hash and add value to string
        //if yes: do nothing (means no match in the end > false)
  //return comparison of testStr and str2
  let hash = {};
  let str = ""
  for(let i = 0; i < s.length; i++) {
    if(hash[s[i]]) {
      str += hash[s[i]]
    } else {
      let values = Object.values(hash)
      if(!(values.indexOf(t[i]) > -1)) {
        hash[s[i]] = t[i]
        str += hash[s[i]]
      }
    }
  }
  return str === t;
};

console.log(isIsomorphic("add", "egg"))// t
console.log(isIsomorphic("foo", "bar"))// f
console.log(isIsomorphic("paper", "title"))//t
console.log(isIsomorphic("badc", "baba"))// f