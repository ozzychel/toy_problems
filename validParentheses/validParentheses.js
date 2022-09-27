// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = (s) => {
  if((s.length % 2) === 1) return false;
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i])
        else if (s[i] === ")" && stack.length && stack[stack.length-1] === "(") stack.pop()
        else if (s[i] === "}" && stack.length && stack[stack.length-1] === "{") stack.pop()
        else if (s[i] === "]" && stack.length && stack[stack.length-1] === "[") stack.pop()
        else return false
    }
    return stack.length === 0;
}

console.log(isValid("()(")) //false
console.log(isValid("[(])")) // false
console.log(isValid("()[]{}()")) // true
console.log(isValid("(((())))")) // true