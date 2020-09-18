var findAndReplacePattern = function(words, pattern) {
  let output = []

  let patternSet = new Set(pattern)
  let wordSet = new Set()

  for (let word of words) {
    wordSet = new Set(word)
    if (patternSet.size != wordSet.size) continue

    let code = {}
    for (let p in pattern) {
      if (!(pattern[p] in code)) code[pattern[p]] = word[p]
    }

    let copy = [...word]
    for (let i in word) { copy[i] = code[pattern[i]] }

    copy = copy.join('')
    if (copy == word) output.push(word)
  }

  return output
};

const words = ["abc","deq","mee","aqq","dkd","ccc"]
const pattern = "abb"
console.log(findAndReplacePattern(words,pattern))

/*
Runtime: 76 ms, faster than 83.65% of JavaScript online submissions for Find and Replace Pattern.
Memory Usage: 39.6 MB, less than 31.73% of JavaScript online submissions for Find and Replace Pattern.
*/
