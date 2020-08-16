class Solution:
  def longestPalindrome(self, s: str) -> int:

    words = {}

    for i in s:
      if i in words:
        words[i] += 1
      else:
        words[i] = 1

    tot = 0
    odds = 0
    for i in words.values():
      tot += i
      if i % 2 == 1:
        odds += 1

    if odds > 1:
      return tot - odds + 1
    else:
      return tot
