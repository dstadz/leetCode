def largestDivisibleSubset(nums):
    
    if len(nums) == 0:
        return nums
    if len(nums) == 1:
        return nums
    
    uno = False
    if 1 in nums:
        nums.remove(1)
        uno = True
    
    graph = {}
    for n in nums:
        graph[n] = [n]
    
    longest = []
    for n in nums:
        print(graph)
        for g in graph:
            print(n,g, graph[g])
            if n != g & n % graph[g][-1] == 0:
                graph[g].append(n)
                if len(longest) < len(graph[g]):
                    longest = graph[g]
                break
    print(graph)
    if uno:
        return [1] + longest
    return longest

nums=[1,2,3,4,6,24]
assert largestDivisibleSubset(nums) == [1,2,4,24]