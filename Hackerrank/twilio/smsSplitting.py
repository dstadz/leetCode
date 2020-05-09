#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'segments' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts STRING message as parameter.
#

def segments(message):
    num = math.ceil(len(message)/160)
    if num == 1:
        text = [message]
    # text = [''] * num
    # for i in range(num):
    #     for m in message:
    # print(text)
    else:
        text = []
        # print(num, len(message), message)
        for i in range(num):
            start = i * 155
            end = min(start + 155, len(message))
            print(i, start,end,message[start: end])

            # why
            frag = message[start: end]
            frag += '('
            frag += str(i+1)
            frag +='/'
            frag += str(num)
            frag += ')'
            print(frag)
            text.append(frag)
            # text[i] += f'({i}/{num})'
            print(text[i])
    return text

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    message = input()

    result = segments(message)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
