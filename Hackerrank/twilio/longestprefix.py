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
    self.end = False
    

    def addChild(self, value):
      if len(str(value)) == 1:
        self.

class Decitree:
  def __init__(self,value = None):

  def insert(self, value):
   

    if self.value == None:
