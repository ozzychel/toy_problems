// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var generateParenthesis = (n) => {
  // OPTIMIZED 2
  const results = [];
  const generate = (str, open, close) => {
    if(str.length === n * 2) {
      // validate string is well-formed
      let counter = 0;
      for(let i = 0; i < str.length; i++) {
        if(counter < 0) return false;
        else if(str[i] === '(') counter++;
        else counter--;
      }
      results.push(str);
      return;
    }
    // create permutations
    if(open > 0) generate(str + '(', open - 1, close);
    if(close > 0) generate(str + ')', open, close - 1);
  }
  generate('', n, n);
  return results;

  // OPTIMIZED 1
  // let result = [];
  // //function to validate str is well-formed
  // const isValid = (str) => {
  //   let count = 0;
  //   for(let i = 0; i < str.length; i++) {
  //     if(count < 0) return false;
  //     else if(str[i] === '(') count++;
  //     else count--;
  //   }
  //   return count === 0;
  // }
  // //funciton to generate well-formed string
  // const generate = (carry) => {
  //   let arr = carry || [];
  //   if(arr.length === 2*n) {
  //     if(isValid(arr)) result.push(arr.join(''))
  //   } else {
  //     arr.push('(');
  //     generate(arr);
  //     arr.pop();
  //     arr.push(')');
  //     generate(arr);
  //     arr.pop();
  //   }
  // }
  // generate();
  // return result;

  // BRUTEFORCE
  // let result = {};
  // let str = '';
  // for(let i = 0; i < n; i++) str += '()';
  // //function to validate str is well-formed
  // const isValid = (str) => {
  //   if(str.length < 2) return false;
  //   let counter = 0;
  //   for(let i = 0; i < str.length; i++) {
  //     if(counter < 0) return false;
  //     else if(str[i] === '(') counter++;
  //     else counter--;
  //   }
  //   return counter === 0;
  // };
  // // function to create well-formed permutations
  // const createStr = (remain, s) => {
  //   if(remain.length === 0) return 1;
  //   for(let i = 0; i < remain.length; i++) {
  //     let newStr = s + remain[i];
  //     if(newStr.length === n*2 && isValid(newStr) && !result[newStr]) {
  //       result[newStr] = true;
  //     }
  //     createStr(remain.slice(0,i) + remain.slice(i+1), newStr)
  //   }
  // }
  // createStr(str, '')
  // return Object.keys(result);
}

console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) // ['()']