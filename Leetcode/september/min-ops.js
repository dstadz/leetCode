var minOperations = function(n) {
  if (n % 2 == 0) return (n/2)**2
  return ((n ** 2) - 1) / 4
};
const n = 3
console.log(minOperations(n))

/*
Runtime: 72 ms, faster than 95.89% of JavaScript online submissions for Minimum Operations to Make Array Equal.
Memory Usage: 37.3 MB, less than 31.64% of JavaScript online submissions for Minimum Operations to Make Array Equal.
*/
