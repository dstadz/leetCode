class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) == 0:
            return False
        nums.sort()
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                return True
        return False

# Runtime: 124 ms, faster than 78.56% of Python3 online submissions for Contains Duplicate.
# Memory Usage: 19.2 MB, less than 16.98% of Python3 online submissions for Contains Duplicate.