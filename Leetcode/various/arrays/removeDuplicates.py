'''
Runtime: 88 ms, faster than 77.37% of Python3 online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 15.7 MB, less than 13.52% of Python3 online submissions for Remove Duplicates from Sorted Array.
'''

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l,r = 0, 1
        if len(nums) == 0:
            return 0

        while r < len(nums):
            # print(nums, l,r)
            if nums[l] != nums[r]:
                l += 1
                nums[l] = nums[r]
            r += 1
        return l+1
        # for i in range(l + 1,r):
        #     nums[i] = 0

