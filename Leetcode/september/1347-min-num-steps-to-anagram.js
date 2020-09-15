var minSteps = function(s, t) {
  if (s == t) return 0

  let ss = s.split('').sort()
  let tt = t.split('').sort()

  let ps = ss.length - 1
  let pt = ps

  while (ps >= 0 & pt >= 0) {
    if (ss[ps] == tt[pt]) {
      ss.splice(ps,1)
      tt.splice(pt,1)
      ps--
      pt--
    }

    else if (ss[ps].charCodeAt() < tt[pt].charCodeAt()) { pt-- }
    else if (ss[ps].charCodeAt() > tt[pt].charCodeAt()) { ps-- }
  }

  return ss.length
};

const s = "friend"
const t = "fami "
console.log(minSteps(s,t))
/*
Runtime: 940 ms, faster than 11.11% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
Memory Usage: 65.4 MB, less than 5.29% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
*/
