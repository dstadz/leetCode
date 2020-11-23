/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((a,b) => a-b)
  return nums[nums.length - k]
};

/*
Runtime: 84 ms, faster than 74.65% of JavaScript online submissions for Kth Largest Element in an Array.
Memory Usage: 39 MB, less than 93.73% of JavaScript online submissions for Kth Largest Element in an Array.
*/