class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        x = []
        for i in range(1,n+1):
            if i %15 == 0:
                x.append('FizzBuzz')
            elif i %3 == 0:
                x.append('Fizz')
            elif i %5 == 0:
                x.append('Buzz')
            else:
                x.append(str(i))
        return(x)

'''
Runtime: 72 ms, faster than 8.09% of Python3 online submissions for Fizz Buzz.
Memory Usage: 15 MB, less than 6.38% of Python3 online submissions for Fizz Buzz.
'''