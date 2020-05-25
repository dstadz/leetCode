#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the maximumToys function below.
def maximumToys(prices, k):
    options = []

    # filter out useless things
    for p in prices:
        if p < k:
            options.append(p)
    
    if sum(options) <= k:
        return len(options)

    tot = 0
    cnt = 0
    options.sort()
    print(options)
    while tot < k:
        tot += options[cnt]
        cnt += 1
        print(cnt, tot)

    return cnt - 1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    prices = list(map(int, input().rstrip().split()))

    result = maximumToys(prices, k)

    fptr.write(str(result) + '\n')

    fptr.close()
