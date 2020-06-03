import math
def twoSum(nums, target):
    ht = HashTable(math.floor(len(nums) * .707))

    if len(nums) == 2:
        return [0,1]

    for n in range(len(nums)):
        insert(ht,nums[n],n)
    #loop thru ht
    for i in nums:
        #a = 1st index
        a = retrieve(ht, i)
        if a == target /2:
            half = True
        #b = index of compliment
        b = retrieve(ht, target - i)
        if b:
            if type(b) == list:
                return  b
            return [a,b]




class LinkedPair:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None
class HashTable:
    def __init__(self, capacity):
        self.capacity = capacity
        self.storage = [None] * capacity

def hash(x, max):
    x = ((x >> 16) ^ x) * 0x45d9f3b
    x = ((x >> 16) ^ x) * 0x45d9f3b
    x = ((x >> 16) ^ x)
    return x % max
def insert(hash_table, key, value):
    index = hash(key, len(hash_table.storage))

    current_pair = hash_table.storage[index]
    last_pair = None

    while current_pair is not None and current_pair.key != key:
        last_pair = current_pair
        current_pair = last_pair.next

    if current_pair is not None:
        current_pair.value = [current_pair.value, value]
    else:
        new_pair = LinkedPair(key, value)
        new_pair.next = hash_table.storage[index]
        hash_table.storage[index] = new_pair
def retrieve(hash_table, key):
    index = hash(key, len(hash_table.storage))

    current_pair = hash_table.storage[index]

    while current_pair is not None:
        if(current_pair.key == key):
            return current_pair.value
        current_pair = current_pair.next


L = [1,3,4,2]
T = 6
print(twoSum(L, T))