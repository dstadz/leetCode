class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1
        most = 0
        while (l < r):
            most = max(most, min(height[l],height[r]) * (r-l))
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return most

'''
Runtime: 124 ms, faster than 89.57% of Python3 online submissions for Container With Most Water.
Memory Usage: 14.6 MB, less than 10.53% of Python3 online submissions for Container With Most Water.
'''