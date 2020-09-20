var countBits = function(num) {
  let bits = [0]
  let bots = [...bits]

  while ( bits.length <= num) {
    bots = [...bits]
    for (let i in bots) bots[i]++

    bits = [...bits, ...bots]
  }

  return bits.slice(0,num+1)
};

const num = 32
console.log(countBits(num))
/*
Runtime: 120 ms, faster than 41.48% of JavaScript online submissions for Counting Bits.
Memory Usage: 46.7 MB, less than 19.26% of JavaScript online submissions for Counting Bits.
*/
