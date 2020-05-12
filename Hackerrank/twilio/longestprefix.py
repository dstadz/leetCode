
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

    if idx not in self.children: # print(f'{self.value}: {idx} joining {self.children.keys()}')
      self.children[idx] = DeciNode(idx)

    if len(value) >= 2: # print(f'{self.value}:{idx} {value[1:]}=> {self.children.keys()} ')
      self.children[idx].addChild(value[1:])
    else:
      self.children[idx].tail = True


    # print(idx, value[1:], self.children)



  def getLongestPrefix(self, number):
    path = self.value
    i = 0
    lg2=''
    while i < len(number)-1:

      if self.tail:
        print(path, number)
        lg2 = path


      if number[i] in self.children:
        self = self.children[number[i]]
        path += self.value

      i += 1
      
    return lg2


l = 10

pre = ['+4265','+351','+42','+5786','+2584', '+45']
# phonums = ['+426568','+456789','+4239999']
phonums = [''] * l


for i,n in enumerate(range(l)):
  x = math.floor(random.random()*10**9)
  phonums[i] = '+' + str(x)
print(pre)
print(phonums, '\n')
'''
start = time.time()
print("hello")
end = time.time()
print(end - start)
'''

print(match(pre, phonums))
print(fancyMatch(pre, phonums))
