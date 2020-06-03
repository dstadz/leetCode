class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        a = []
        b = []
        flip = []
        tot = 0
        
        #filter i into a,b, or flip
        for i, cost in enumerate(costs):
            if cost[0] < cost[1]:
                a.append(i)
                tot += cost[0]
            
            elif cost[0] > cost[1]:
                b.append(i)
                tot += cost[1]
                
            else:
                flip.append(i)
                tot += cost[0]
          


        #add flips into smaller arr
        if flip:
            for i in flip:
                if len(a) > len(b):
                    b.append(i)
                else:
                    a.append(i)
        
        #ideal sol
        if len(a) == len(b):
            return tot
        
        # calc dif between a and b
        dif = [0]*len(costs)
        for i, cost in enumerate(costs):
            dif[i] = abs(cost[0]-cost[1]) or 1001

        if len(b) > len(a):
            big = b
            sml = a
        else:
            big = a
            sml = b
        
        print(dif)
        
        while len(big) - len(sml) > 0:
            i = dif.index(min(dif))
            print(i, sml, big)
            if i not in sml:
                sml.append(i)
            try:
                big.remove(i)
            except:
                pass
            dif[i] = 1001
            print(dif)

        tot = 0 #new tot
        print(a,b)
        for i in a:
            tot += costs[i][0]
        for i in b:
            tot += costs[i][1]

        return tot
        
            