def longestPalindrome(s):

  lon_pal = ''

  def check(l,r):
    if s[l] != s[r]:
      return ''
    while s[l] == s[r]:
      print(s[l], s[r], s[l]==s[r])
      pal = s[l:r]
      print(pal)
      if 0 < l and r < len(s) - 1:
        l, r = l-1, r+1

      else:
        break
    print('pal',pal)
    return pal


  c = 0
  while c < len(s) - 2:
    c += 1
    print(c)
    l, r = c-1, c+1
    lon_pal = max(lon_pal,check(l,r))

    l, r = c, c+1
    lon_pal = max(lon_pal,check(l,r))

    l, r = c-1, c
    lon_pal = max(lon_pal,check(l,r))

  return lon_pal

print(longestPalindrome('abcba'))