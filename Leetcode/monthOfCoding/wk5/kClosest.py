import math

class BinarySearchTree:
    def __init__(self, value = None, coor = None):
        self.value = value
        self.coor = coor
        self.left = None
        self.right = None
        
    def insert(self, value):
        if self.value == None:
            self.value = value
            return
        elif self.value <= value:
            if self.right:
                return self.right.insert(value)
            else:
                self.right = BinarySearchTree(value)
        else:
            if self.left:
                return self.left.insert(value)
            else:
                self.left = BinarySearchTree(value)

class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        
        closest = [None] * K
        tree = BinarySearchTree()
        
        for p in points:
            d = math.sqrt(p[0] ** 2 + p[1] ** 2)
            tree.insert(d,p)
        
        
            
