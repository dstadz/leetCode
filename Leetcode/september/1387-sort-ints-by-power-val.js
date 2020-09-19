var getKth = function(lo, hi, k) {
  let powers = []

  const getPower = x => {
    let steps = 0
    while (x != 1) {
      if (x % 2 == 0) x /= 2
      else x = (3 * x) + 1
      steps++
    }
    return steps
  }

  for (let i = lo; i <= hi; i++) { powers.push([i,getPower(i)]) }

  powers.sort((a,b) => a[1] - b[1])
  return powers[k-1][0]
};

let [lo, hi, k] = [12,150,2]
console.log(getKth(lo,hi,k))

/*
Runtime: 100 ms, faster than 97.73% of JavaScript online submissions for Sort Integers by The Power Value.
Memory Usage: 42.8 MB, less than 45.45% of JavaScript online submissions for Sort Integers by The Power Value.
*/