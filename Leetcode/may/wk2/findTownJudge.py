class Solution:
    def findJudge(self, N: int, trust: List[List[int]]) -> int:
        trusted = []
        trustCount = {}
        
        if len(trust) == 0:
            return 1
        
        for n in trust:
            if n[1] not in trustCount:
                trustCount[n[1]] = 1
                trusted.append(n[1])
            else:
                trustCount[n[1]] += 1
                
        # print(trusted,trustCount)
        for t in trust:
            if t[0] in trusted:
                trusted.remove(t[0])
     
        for t,n in trustCount.items():
            if (t in trusted) & (n == N-1) :
                return t
        return -1