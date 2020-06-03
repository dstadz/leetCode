# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        p1, p2, p3 = ListNode(None), ListNode(None), ListNode(None)
        p1.next, p2.next = l1, l2
        l3 = ListNode(min(p1.next.val, p2.next.val))
        p3.next = l3
        while p1.next or p2.next:
            if not p1.next:
                p3.next = p2.next.val
                p2.next = p2.next.next
                p3.next = p3.next.next
            elif not p2.next:
                p3.next = p1.next.val
                p1.next = p1.next.next
                p3.next = p3.next.next
            elif p1.next.val < p2.next.val:
                p3.next = p1.next.val
                p1.next = p1.next.next
                p3.next = p3.next.next
            else:
                p3.next = p2.next.val
                p2.next = p2.next.next
                p3.next = p3.next.next
            print(l3.next)
        return l3