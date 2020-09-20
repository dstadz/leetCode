var minSetSize = function(arr) {

  let numCount = {}
  let amountArr = []
  let removedAmount = 0
  let removedSetCount = 0


  for (let i of arr) {
    if (i in numCount) numCount[i]++
    else numCount[i] = 1
  }

  for (let j in numCount) amountArr.push(numCount[j])

  amountArr.sort((a,b) => a - b)

  while (removedAmount < arr.length / 2) {
    removedAmount += amountArr.pop()
    removedSetCount++
  }

  return removedSetCount
};

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(minSetSize(arr))
/*
Runtime: 172 ms, faster than 64.29% of JavaScript online submissions for Reduce Array Size to The Half.
Memory Usage: 61 MB, less than 31.25% of JavaScript online submissions for Reduce Array Size to The Half.
*/
