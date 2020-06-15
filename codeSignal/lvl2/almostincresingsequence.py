def almostIncreasingSequence(sequence):

  bumps = []
  # check if already sorted
  for i in range(len(sequence)-1):
    if sequence[i] >= sequence[i+1]:
      bumps.append(i)

      if len(bumps) > 1:
        return False
  print(bumps)

  if bumps[0] == len(sequence)-2 or bumps[0] == 0:
    return True

  if sequence[bumps[0]-1] >= sequence[bumps[0]+1]:
    if sequence[bumps[0]] < sequence[bumps[0]+2]:
      return True
    return False

  return True