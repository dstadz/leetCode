def superDigit(n, k):
    print(n,k)
    if len(n) == 1 and k == 1:
        print('finished:', n)
        fin = n
        return n

    elif len(n) != 1:
        sum = 0
        for i in n:
            sum += int(i)
        return superDigit(str(sum),k)
    
    elif k != 1:
        return superDigit(n*k,1)


print(superDigit('148',3))