
import math
import os
import random
import re
import sys
import time


#
# Complete the 'match' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts following parameters:
#  1. STRING_ARRAY prefixes
#  2. STRING_ARRAY numbers
#

def match(prefixes, numbers):
  longestPre = []

  for n in numbers:
    longest = ''

    for p in prefixes:

      if len(p) < len(longest):
        continue

      if p == n[0:len(p)]:
        if len(p) > len(longest):
          longest = p

    longestPre.append(longest)

  return longestPre

def fancyMatch(prefixes, numbers):
  longestPre = ['']*len(numbers)

  #add each prefix into tree
  d = DeciNode()
  for p in prefixes:
    d.addChild(p[1:])

  for i,n in enumerate(numbers):
    longestPre[i] = d.getLongestPrefix(n)

  return longestPre



  #sort values by numeral value
    #example: 48639 = (head)-->(4)-->(8)-->(6)-->(3)-->(9)--> None
    #                             \
    #         432                  ->(3)-->(2)-->None
class DeciNode:
  def __init__(self, value='+'):
    self.value = value
    self.children = {}
    self.tail = False

  def addChild(self, value):
    if value[0] == '+':
      value = value[1:]

    idx = value[0]

    if idx not in self.children:
      self.children[idx] = DeciNode(idx)

    if len(value) >= 2:
      self.children[idx].addChild(value[1:])
    else:
      # print(f'tail at {self.children[idx].value}')
      self.children[idx].tail = True


    # print(idx, value[1:], self.children)

  def getLongestPrefix(self, number):

    number = number[1:]
    path = self.value
    i = 0
    lg2=''

    while i < len(number):
      # print(f'({i},{number[i]}) {path} {lg2}')
      # print('self:', self.value, self.children.keys(), self.tail, '\n')

      if self.tail:
        # print('tail', path, number)
        lg2 = path

      if number[i] in self.children:
        # print('step', path)
        self = self.children[number[i]]
        path += self.value
      else:
        return lg2

      i += 1

    return lg2



l = 1
for exp in range(5):
  l = 10 ** exp
  pre = [''] * l
  phonums = [''] * l

  for i,n in enumerate(range(l)):
    pre[i] = '+' + str(math.floor(random.random()*10**random.randrange(1,9)))
    phonums[i] = '+' + str(math.floor(random.random()*10**9))

  start = time.time()
  reg = match(pre, phonums)
  end = time.time()
  print(end - start)

  start = time.time()
  fancy = fancyMatch(pre, phonums)
  end = time.time()
  print(l, end - start)

  err_ct = 0
  valid_pre = 0
  for i in range(l):
    if reg[i] != fancy[i]:
      print(f'err at {i}')
      print(reg[i], fancy[i])
      err_ct += 1
    elif fancy[i] != '':
      valid_pre += 1
  print(valid_pre, err_ct)