var findMinFibonacciNumbers = function(k) {
  let fibs = []
  let tot = 0
  let [a, b, c] = [0,1,1]
  while (b <= k) {
    c = a + b
    a = b
    b = c
    fibs.push(c)
  }
  fibs.pop()
  while (k > 0) {
    tot++
    while (k < fibs[fibs.length - 1]) { fibs.pop() }
    k -= fibs.pop()
  }
  return tot
}
const k = 10
console.log(findMinFibonacciNumbers(k))
/*
Runtime: 96 ms, faster than 49.15% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.
Memory Usage: 38.6 MB, less than 47.46% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.
*/
