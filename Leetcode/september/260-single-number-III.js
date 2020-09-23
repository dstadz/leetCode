var singleNumber = function(nums) {
  if (nums.length < 3) return nums
  nums.sort()
  let nonpair = []
  let i = nums.length-1
  while (i > 0 && nonpair.length < 2) {
    console.log(i,nums, nums[i-2], nums[i-1],nums[i])
    if (nums[i] == nums[i-1]) { //[...,x,x]
      nums.pop()
      nums.pop()
    } else if (nums[i-2] == nums[i-1]) { //[...,x,x,y]
      nonpair.push(nums.pop())
      // nums.pop()
      // nums.pop()
    } else { //[...,a,x,y]
      nonpair.push(nums.pop())
      nonpair.push(nums.pop())
    }
    i = nums.length - 1
  }
  console.log(nums,nonpair)
  return nonpair.length == 2 ? nonpair : [nums[0],nonpair[0]]
}
const nums = [0,1,1,2]
console.log(singleNumber(nums))
/*
Runtime: 84 ms, faster than 65.64% of JavaScript online submissions for Single Number III.
Memory Usage: 37.7 MB, less than 83.85% of JavaScript online submissions for Single Number III.
*/