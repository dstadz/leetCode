

def binSearch(arr,el):
    l,r = 0, len(arr) - 1
    while l + 1 < r:
      mid = (l + r) // 2
      if arr[mid] == el: return el
      elif arr[mid] < el: l = mid
      else: r = mid
    if arr[l] == el: return el
    if arr[r] == el: return el
    else: return -1


def find2Sum(arr, t):
  arr.sort()
  for i in arr:
    swap = binSearch(arr, t - i)
    if swap > 0:
      print(i, t - i,'=>',i * (t - i))
      return i * (t - i)

def find3Sum(arr,t):
  arr.sort()
  for i in arr:
    for j in arr[i:]:
      swap = binSearch(arr, t-i-j)
      if swap > 0:
        print(i,j, t-i-j,'=>',i * j * (t-i-j))
        return i * j * (t-i-j)


print(find2Sum(numbers, target))
print(find3Sum(numbers, target))
