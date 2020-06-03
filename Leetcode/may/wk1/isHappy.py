class Solution:
    def isHappy(self, n: int) -> bool:
        if n == 1:
            return True
        elif n == 0:
            return False

        cyc = [n]
        def getNext(n):
            tot = 0
            for i in str(n):
                tot += int(i)**2
            return tot
            cyc.append(getNext(n))


        while cyc[-1] not in cyc[:-1]:
            if cyc[-1] == 1:
                return True
            cyc.append(getNext(cyc[-1]))
        return False


'''
Your runtime beats 75.03 % of python3 submissions.
'''