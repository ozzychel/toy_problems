// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

var numeralToRoman = function(num) {
  let map = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C",100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
  ];
  let result = "";
  while(num > 0) {
    let index = 0;
    for(let i = index; i < map.length; i++) {
      let key = map[i][0];
      let val = map[i][1];
      if( (num % val) !== num) {
        for(let j = 0; j < Math.floor(num / val); j++) {
          result += key;
        }
        index = i;
        num = num - (Math.floor(num/val) * val);
        break;
      }
    }
  }
  return result;
};

console.log(numeralToRoman(3)) // III
console.log(numeralToRoman(4)) // IV
console.log(numeralToRoman(27)) // XXVII
console.log(numeralToRoman(1994)) // MCMXCIV