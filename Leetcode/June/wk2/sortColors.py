class Solution:
    def sortColors(self, nums: List[int]) -> None:
    # Do not return anything, modify nums in-place instead.

        if len(nums) == 0 or len(nums) == 1:
            return 
        if len(nums) == 2:
            nums[0], nums[1] = min(nums), max(nums)
            return

        colors = {0:0, 1:0, 2:0}
        for i in nums:
            colors [i] += 1

        start = 0
        num = 0
        while start < len(nums):
            for i in range(colors[num]):
                nums[start + i] = num

            print(nums)
            start += colors[num]
            num += 1
