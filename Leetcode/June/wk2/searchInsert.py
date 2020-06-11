class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        if len(nums) == 0:
            return 0

        if len(nums) == 1 & nums[0] == target:
            return 0

        if target <= nums[0]:
            return 0
        if nums[-1] == target:
            return len(nums) - 1
        if nums[-1] < target:
            return len(nums)
        if len(nums) == 2:
            return 1

        left = 0
        right = len(nums) - 1
        while left + 1 < right:
            idx = (left + right) // 2
            if target <= nums[idx]:
                right = idx

            elif nums[idx] <= target:
                left = idx

        return left + 1