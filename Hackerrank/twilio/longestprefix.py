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
  #sort prefixes by length big => small
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


class DeciNode:
  def __init__(self, value):
    self.value = value
    self.children = [None] * 10
    self.tail = False


  #sort values by numeral value 
    #example: 48639 = (head)-->(4)-->(8)-->(6)-->(3)-->(9)--> None
    #                       \ .h
    #                         >(3)-->(2)

    def addChild(self, value):
      try:
        cut = value[1:]
        if self.children[value[0]]:
          self.addChild(cut)
      except:
        self.tail = True

class Decitree:
  def __init__(self,value = None):

  def getLongest(self, value, path=[]):
    x

    if self.value == None:
