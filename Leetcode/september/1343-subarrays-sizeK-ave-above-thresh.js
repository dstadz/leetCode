var numOfSubarrays = function(arr, k, threshold) {
  let tot = 0

  const aveK = i => {
    let sum = 0
    for (let j = i; j < i + k; j++) sum += arr[j]
    return sum / k
  }


  for (let i = 0; i < arr.length - k + 1; i++) {
    console.log(aveK(i))
    if (aveK(i) >= threshold) tot++
  }
  return tot
}
const [arr, k, threshold] = [[11,13,17,23,29,31,7,5,2,3], 3, 5]
console.log(numOfSubarrays(arr,k,threshold))
/*
Runtime: 2376 ms, faster than 21.95% of JavaScript online submissions for Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold.
Memory Usage: 46.4 MB, less than 21.95% of JavaScript online submissions for Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold.
*/