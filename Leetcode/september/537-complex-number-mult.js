var complexNumberMultiply = function(a, b) {

  const getComp = s => {
    const plus = s.indexOf('+')
    const real = parseInt(s.slice(0,plus))
    const imag = parseInt(s.slice(plus+1, s.length-1))
    return [real, imag]
  }

  const [ax, ai] = getComp(a)
  const [bx, bi] = getComp(b)

  return `${(ax * bx) - (ai * bi)}+${(ax * bi) + (bx * ai)}i`
};
let [a,b] = ["-1+1i", "1+-1i"]
console.log(complexNumberMultiply(a,b))
/*
Runtime: 68 ms, faster than 91.94% of JavaScript online submissions for Complex Number Multiplication.
Memory Usage: 36.8 MB, less than 58.06% of JavaScript online submissions for Complex Number Multiplication.
*/