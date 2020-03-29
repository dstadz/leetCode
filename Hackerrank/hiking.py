def countingValleys(n, s):
  print(n,s)
  #declare vars
  valleys = 0
  altitude = 0
  #define valley
  def isValley(path):
    altitude =0
    

  #loop to count valleys
  for v in range(n):
    print(altitude)
    if s[0] == 'U':
      return False
    elif s[0] == 'D':
      altitude -= 1
      for i in s[1:]:
        print('i:',i)
        if altitude == 0:
          return True
        elif i == 'U':
          altitude += 1
        elif i == 'D':
          altitude -= 1
      return False
    valleys += 1
  return valleys


    


countingValleys(8,'UDDDUDUU')
print(countingValleys(8,'UDDDUDUU') or "poop")