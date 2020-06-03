class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        a = collections.defaultdict(int)
        for e in A:
            for b in B:
                a[e+b] += 1
        f = 0
        for c in C:
            for d in D:
                f += a[-c-d]
        return f

"""
Runtime: 440 ms, faster than 13.02% of Python3 online submissions for 4Sum II.
Memory Usage: 55.7 MB, less than 8.33% of Python3 online submissions for 4Sum II.
"""