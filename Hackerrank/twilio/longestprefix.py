
import math
import os
import random
import re
import sys


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
    print(p)
    d.addChild(p[1:])

  for i,n in enumerate(numbers):
    longestPre[i] = d.getLongestPrefix(n)
    print('\n')

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
    if len(value) > 2:
      try:
        self.children[idx].addChild(value[1:])
      except:
        self.children[idx] = DeciNode(idx)
        self.children[idx].addChild(value[1:])

    elif len(value) == 1:
      if not self.children[idx]:
        self.children[idx] = DeciNode(idx)

      self.children[idx].tail = True

    # if len(value):
    #   cut = value[1:]
    #   val = int(value[0])

    #   if self.children[val] == None:
    #     self.children[val] = DeciNode(val)

    #   self.children[val].addChild(cut)

    # else:
    #   self.tail = True

  def getLongestPrefix(self, number='', i=0, path='', lg2=''):
    print(number,i,path,lg2)

    if i < len(number):
      nth = number[i]
      print(nth)
      if self.tail:
        lg2 = path

      if self.children[nth]:
        self.children[nth].getLongestPrefix(number,i+1,path+str(self.value),lg2)

    return(lg2)


    # number is going through tree by matching number[x] and xth branch if true
        ###try adding a try except block, and compare function times
          # try:
          #   path.append(something)
          #   self.children[xx].getLongest(xx,)
          # except:
          #   if self.value == None:

pre = ['+426','+35','+423']
phonums = ['+426568','+456789','+4239999']

# print(match(pre, phonums))
print(fancyMatch(pre, phonums))