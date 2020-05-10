#!/bin/python3

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
    d = DeciTree()
    for p in prefixes:
      d.head.addChild(p)

    for i,n in enumerate(numbers):
      longestPre[i] = d.getLongest(n)

    return longestPre



class DeciNode:
  def __init__(self, value):
    self.value = value
    self.children = [None] * 10
    self.tail = False

  #sort values by numeral value
    #example: 48639 = (head)-->(4)-->(8)-->(6)-->(3)-->(9)--> None
    #                       \
    #                         >(3)-->(2)
  def addChild(self, value):

    if len(value) > 1:
      cut = value[1:]

      if self.children[value[0]] == None:
        self.children[value[0]] = DeciNode(value[0])

      self.children[value[0]].addChild(cut)

    else:
      self.tail = True

class DeciTree:
  def __init__(self,value = None):
    self.head = DeciNode('Head')

  def getLongest(self, value, path=[]):
    xx = value[len(path)]
    try:
      path.append(something)
      self.children[xx].getLongest(xx,)
    except:
      if self.value == None:
        