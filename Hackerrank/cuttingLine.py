#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumBribes function below.
def minimumBribes(q):
    bribes = 0
    qq = q[:]
    order = True

    # throw easy chaos flag
    for i, org in enumerate(qq):
        if i < org - 3:
            order = False
            break
    
    if order:
        for i, org in enumerate(qq):

            if i == org - 3:
                bribes += 2
                qq[i], qq[i+1], qq[i+2] = qq[i+1], qq[i+2], qq[i]

            elif i == org - 2:
                bribes += 1
                qq[i], qq[i+1] = qq[i+1], qq[i]

            i += 1

    if order:
        print(bribes)
    else:
        print('Too chaotic')

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        n = int(input())

        q = list(map(int, input().rstrip().split()))

        minimumBribes(q)
