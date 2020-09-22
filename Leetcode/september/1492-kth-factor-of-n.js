var kthFactor = function(n, k) {

  let i = 1
  let kth = 1
  let factors = []
  while (kth <= k & i <= n) {
    if (n % i == 0) {
      kth++
      factors.push(i)
    }
    i++
  }
  return(kth > k ? factors.pop() : -1)
}

const [n,k] = [1000,3]
console.log(kthFactor(n,k))
/*
Runtime: 92 ms, faster than 14.41% of JavaScript online submissions for The kth Factor of n.
Memory Usage: 36.9 MB, less than 61.26% of JavaScript online submissions for The kth Factor of n.
*/
