class Solution:
    def canJump(self, nums: List[int]) -> bool:
        cur, furthest = nums[0], nums[0]
        if len(nums) == 1 or 0:
            return True
        elif cur >= len(nums)-1:
            return True

        while cur > 0:
            if cur + nums[cur] >= len(nums) - 1:
                return True

            elif cur + nums[cur] > furthest:
                cur +=nums[cur]
                furthest = cur
            else:
                cur -= 1
        return False

'''
Your runtime beats 91.10 % of python3 submissions.

'''