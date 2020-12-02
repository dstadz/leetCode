
def findSum(arr, t):
  arr.sort()
  def binSearch(el):
    l,r = 0, len(arr) - 1
    while l + 1 < r:
      mid = (l + r) // 2
      if arr[mid] == el: return el
      elif arr[mid] < el: l = mid
      else: r = mid
    if arr[l] == el: return el
    if arr[r] == el: return el
    else: return -1

  for i in arr:
    swap = binSearch(t - i)
    if swap > 0:
      print(i, t - i)
      return i * (t - i)

print(findSum(numbers, target))
