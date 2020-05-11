
import math
# import os
# import random
# import re
# import sys


#  ( STRING ) => return{ STRING_ARRAY } .
#

def segments(message):
  num = math.ceil(len(message)/160)

  if num == 1:
    segmentList = [message]

  else:
    segmentList = []
    # print(num, len(message), message)
    for i in range(num):

      if i == 0:
        start = 0

      else:
        start = end + 1

        while message[start] != ' ':
          start -= 1

      end = min(start + 154, len(message))
      print(i, start, end)

      # why no f-strings?
      # segmentList.append(message[start:end] += f'({i}/{num})')
      frag = message[start: end]
      frag += '('
      frag += str(i+1)
      frag +='/'
      frag += str(num)
      frag += ')'

      segmentList.append(frag)

  return segmentList

chat = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

print(segments(chat))