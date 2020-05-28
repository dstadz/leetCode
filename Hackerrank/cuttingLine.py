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
        for i in range(len(qq)):
            qq[i] -= 1

        i = len(qq) - 1
        while i > 0:
            if qq[i] == i:
                i -= 1

            elif qq[i-1] == i:
                temp = qq[i]
                qq[i] = qq[i-1]
                qq[i-1] = temp
                bribes += 1

            elif qq[i-2] == i:
                temp = qq[i-2]
                qq[i-2] = qq[i-1]
                qq[i-1] = temp
                bribes += 1





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
