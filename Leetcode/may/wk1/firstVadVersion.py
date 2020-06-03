# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        begin = 1 
        end = n
        mid = begin + end // 2

        while not isBadVersion(mid-1) ^ isBadVersion(mid):
            print(begin, mid, end)
            if not isBadVersion(mid):# if over shot
                print('right')
                begin = mid
                mid = (begin + end) // 2 + 1
                
            else: #if not yet reached
                print('left')
                end = mid
                mid = (begin + end) // 2
                
        return mid