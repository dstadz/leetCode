#!/bin/python3

import math
import os
import random
import re
import sys


#  ( STRING ) => return{ STRING_ARRAY } .
#

def segments(message):
    num = math.ceil(len(message)/160)
    
    if num == 1:
        segmentList = [message]

    else:
        segmentList = []
        # print(num, len(message), message)
        for i in range(num):
            start = i * 155

            #takes step back to not cut word
            while i[start] != ' ':
                start -= 1

            end = min(start + 155, len(message))

            # why no f-strings?
            # segmentList.append(message[start:end] += f'({i}/{num})')

            frag = message[start: end]
            frag += '('
            frag += str(i+1)
            frag +='/'
            frag += str(num)
            frag += ')'

            segmentList.append(frag)

    return segmentList

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    message = input()

    result = segments(message)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
