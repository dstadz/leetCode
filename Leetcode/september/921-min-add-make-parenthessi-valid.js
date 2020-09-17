var minAddToMakeValid = function(S) {

  let stack = []

  for (let i of S){
    if (i == ')' & stack[stack.length-1] == '(') stack.pop()
    else stack.push(i)
  }

  return stack.length
};

const s = "()))(("
console.log(minAddToMakeValid(s))

/*
Runtime: 80 ms, faster than 64.19% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
Memory Usage: 37 MB, less than 54.27% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
*/
