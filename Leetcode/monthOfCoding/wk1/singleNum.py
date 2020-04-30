class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        nums.sort()
        if len(nums) == 1:
            return nums[0]
        if nums[0] != nums[1]:
            return nums[0]
        while nums[-1] == nums[-2]:
            nums.pop()
            nums.pop()
        return nums[-1]

'''
Your runtime beats 83.29 % of python3 submissions.
'''