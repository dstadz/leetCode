def threeNumberSum(arr, target):
    # Write your code here
    arr.sort()
    print(arr, target,'\n')
    answer = []


    for a,i in enumerate(arr[:-2]):
      print('\n')
      if i + arr[-1] < target-arr[-2]:
        continue
      for b,j in enumerate(arr[:a:-1]):
        print(i, arr[:a:-1], j, '=>', target-i-j)
        if (target-i-j) in arr[:a:-1]:
          print('!!!\n')
          if target-i-j != j:
            trip = [i,min(target-i-j,j), max(target-i-j,j)]
            if trip not in answer:
              answer.append(trip)
    return answer


# nums = [-8,-6,-5,-1,0,1,2,3,5,6,12]
# nums = [1,2,3,4,5,6,7,8,9,15]
nums = [12,3,1,2,-6,5,0,-8,-1,6,-5]
t = 0
print(threeNumberSum(nums, 0))