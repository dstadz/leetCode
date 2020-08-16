/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {

  let goods = 0
  const check = (i,j,k) => {
    if (Math.abs(arr[i] - arr[j]) <= a) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        if (Math.abs(arr[i] - arr[k]) <= c){
          return true
        }
      }
    }
    return false
  }

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (check(i,j,k)) {
          goods += 1
        }
      }
    }
  }
  return goods

};

/*
Runtime: 80 ms, faster than 91.94% of JavaScript online submissions for Count Good Triplets.
Memory Usage: 37.2 MB, less than 15.86% of JavaScript online submissions for Count Good Triplets.
*/