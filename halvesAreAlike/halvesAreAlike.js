var halvesAreAlike = function(s) {
  // O(logN)time | O(1) space for long str
  const vowels = {"a":true, "e":true, "i":true, "o": true, "u":true}
  let result = 0;
  for(let i = 0, j = s.length - 1; i < j; i++, j--) {
    if(vowels[s[i].toLowerCase()]) result++;
    if(vowels[s[j].toLowerCase()]) result--;
  }
  return result === 0;


  // // O(n)time | O(n)space
  // const vowels = {"a":true, "e":true, "i":true, "o": true, "u":true}
  // let count1 = 0, count2 = 0;
  // const left = s.slice(0, s.length / 2).toLowerCase();
  // const right = s.slice(s.length / 2).toLowerCase();
  // for(let i = 0; i < left.length; i++) {
  //   if(vowels[left[i]]) count1++;
  //   if(vowels[right[i]]) count2++;
  // }
  // return count1 === count2;
};

console.log(halvesAreAlike("ebeilA")) // true
console.log(halvesAreAlike("ab")) //false
console.log(halvesAreAlike("book")) //true
console.log(halvesAreAlike("textbook")) //false
console.log(halvesAreAlike("MerryChristmas")) //false
console.log(halvesAreAlike("AbCdEfGh")) //true