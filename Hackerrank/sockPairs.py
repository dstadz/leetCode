def sockMerchant(n, ar):
  pairs = 0
  types = []
  for i in ar:
    amount = 0
    if i not in types:
      types.append(i)
      print('types',types)
      print('ar:',ar[ar.index(i):])
      for j in ar[ar.index(i):]:
        if j == i:
          amount += 1
      print(amount)
      pairs += amount//2
  return pairs

socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
print(sockMerchant(len(socks),socks))