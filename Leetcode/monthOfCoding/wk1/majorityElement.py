class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        
        elements = {}
        
        for e in nums:
            
            if e not in elements:
                elements[e] = 1
            else:
                elements[e] += 1
                
            if elements[e] > len(nums)/2:
                return e