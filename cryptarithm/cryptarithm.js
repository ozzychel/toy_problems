// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

// Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do)

function solution(crypt, solution) {
  //crypt - arr[str] solution - arr[arr[tuple]]
  // no leading zeroes except for '0'
  // valid arithmetic solution
  //for each str in crypt decode/convert to valid number
  //recreate arithmetics with numbers, and check if valid
  const checkStr = (str) => {
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
      for(let j = 0; j < solution.length; j++) {
        if(strArr[i] === solution[j][0]) {
          strArr[i] = solution[j][1]
          break
        }
      }
    }
    let joined = strArr.join('')
    if(joined[0] === '0' && joined.length !== 1) return [0, 0]
    let number = Number.parseInt(joined)
    console.log(number)
    return [1, number]
  }
  let first = checkStr(crypt[0])
  let second = checkStr(crypt[1])
  let third = checkStr(crypt[2])
  if(!first[0] || !second[0] || !third[0]) return false;
  return first[1] + second[1] === third[1];
}

console.log(solution(["SEND", "MORE", "MONEY"], [['O', '0'],
['M', '1'],
['Y', '2'],
['E', '5'],
['N', '6'],
['D', '7'],
['R', '8'],
['S', '9']])) //true

console.log(solution(["TEN", "TWO", "ONE"], [['O', '1'],
['T', '0'],
['W', '9'],
['E', '5'],
['N', '4']])) //false