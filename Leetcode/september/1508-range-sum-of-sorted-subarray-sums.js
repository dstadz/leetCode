var rangeSum = function(nums, n, left, right) {

  const sumSeq = (l,r) => {
    
    return sum
  }
  let lists = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      lists.push(nums[i] + nums[j])
    }
  }
  console.log(lists)
}
const [nums, n, left, right] = [[1,2,3,4], 4, 3, 4]
console.log(rangeSum(nums, n, left, right))