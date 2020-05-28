def balancedBrackets(string):
    # Write your code here
  stack = []
  for s in string:
    print(stack,s)
    if s == '(' or s=='{' or s=='[' or s=='|':
      stack.append(s)
    if len(stack) == 0:
      return False
    if len(stack) > 1 and s=='|' and stack[-1]=='|':
      stack.pop()
    if s==')' and stack[-1]=='(':
      stack.pop()
    if s==']' and stack[-1]=='[':
      stack.pop()
    if s=='}' and stack[-1]=='{':
      stack.pop()

  return len(stack) == 0
 
  return stack

loops = '{()|}'

print(balancedBrackets(loops))