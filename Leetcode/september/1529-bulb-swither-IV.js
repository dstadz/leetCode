var minFlips = function(target) {
  let flips = 0

  target = '0' + target
  for (let i = 1; i < target.length; i++) {
    if (target[i-1] != target[i]) flips++
  }

  return flips
};

const target = "11000"
console.log(minFlips(target))
/*
Runtime: 76 ms, faster than 96.95% of JavaScript online submissions for Bulb Switcher IV.
Memory Usage: 39.2 MB, less than 25.76% of JavaScript online submissions for Bulb Switcher IV.
*/
