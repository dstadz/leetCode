from math import comb

class CombinationIterator:

    def __init__(self, characters: str, combinationLength: int):
        self.characters = characters
        self.it = [0]*combinationLength
        self.end = [0]*combinationLength
        self.combos = [0]* comb(len(characters), combinationLength)

        for i in range(len(self.it)):
            self.it[i] = i
            self.end[i] = i + len(self.characters) - len(self.it)

        q = len(self.it) - 1
        j = 0
        self.k = -1
        while self.it[0] != self.end[0]:
            self.combos[j] = self.it.copy()
            j += 1

            if self.it[q] != self.end[q]:
                self.it[q] += 1
            else:
                while self.it[q] == self.end[q]:
                    q -= 1
                self.it[q] += 1
                while q < len(self.it) - 1:
                    q += 1
                    self.it[q] = self.it[q-1]+1
        self.combos[-1] = self.end


    def next(self) -> str:
        self.k += 1
        comb = ''
        for i in self.combos[self.k]:
            comb += (self.characters[i])
        return comb

    def hasNext(self) -> bool:
        return self.k != len(self.combos)-1



# Your CombinationIterator object will be instantiated and called as such:
# obj = CombinationIterator(characters, combinationLength)
# param_1 = obj.next()
# param_2 = obj.hasNext()