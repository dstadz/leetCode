import math
class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        
        closest = [None] * K
        
        for p in points:
            d = math.sqrt(p[0] ** 2 + p[1] ** 2)
