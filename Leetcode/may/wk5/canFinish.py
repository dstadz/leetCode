class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        
        # create graph
        prereqs = {}
        for n in range(numCourses):
            prereqs[n] = []
        
        for c in prerequisites:
            prereqs[c[0]].append(c[1])
            
            
        # check for cycles
        
        
        #complete courses
        finished = []
        
        #get all with no prereqs
        for f in prereqs:
            if len(prereqs.get(f)) == 0:
                finished.append(f)

        same = False
        while not same:       
            same = True
            for f in prereqs:
                try:
                    if prereqs.get(f)[0] in finished and f not in finished:
                        finished.append(f)
                        same = False
                        
                except:
                    pass
        return len(finished) == numCourses
            
