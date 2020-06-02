#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the stepPerms function below.
def stepPerms(n, prep={1:1,2:2,3:4}):
    print(n, prep)
    if n in prep:
        return prep[n]
    
    else:
        prep[n] = stepPerms(n-3) + stepPerms(n-2) + stepPerms(n-1)
        return stepPerms(n-3) + stepPerms(n-2) + stepPerms(n-1)





if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = int(input())

    for s_itr in range(s):
        n = int(input())

        res = stepPerms(n)

        fptr.write(str(res) + '\n')

    fptr.close()
