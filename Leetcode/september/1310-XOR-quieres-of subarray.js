var xorQueries = function(arr, queries) {

  let output = []
  for (let i of queries) {
    let j = i[0]
    let x = 0
    while (j <= i[1]) {
      x = x ^ arr[j]
      j++
    }
    output.push(x)
  }
  return output
};
const arr = [1,3,4,8]
const queries = [[0,1],[1,2],[0,3],[3,3]]
console.log(xorQueries(arr,queries)) //[2,7,14,8]
/*
Runtime: 604 ms, faster than 39.02% of JavaScript online submissions for XOR Queries of a Subarray.
Memory Usage: 49 MB, less than 75.61% of JavaScript online submissions for XOR Queries of a Subarray.
*/