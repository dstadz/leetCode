# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next



'''
Runtime: 120 ms, faster than 14.93% of Python3 online submissions for Add Two Numbers.
Memory Usage: 13.7 MB, less than 78.42% of Python3 online submissions for Add Two Numbers.
'''
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        p1 = l1
        p2 = l2
        answer = ListNode((p1.val + p2.val) % 10)
        p3 = answer
        carry = (p1.val + p2.val) > 9
        if carry:
            p3.next = ListNode(1)

        while p1.next != None and p2.next != None:
            p1 = p1.next
            p2 = p2.next

            if carry:
                p3.next = ListNode((p1.val + p2.val + 1) % 10)
                carry = (p1.val + p2.val + 1) > 9
            else:
                p3.next = ListNode((p1.val + p2.val) % 10)
                carry = (p1.val + p2.val) > 9
            p3 = p3.next


        while p1.next != None:
            p1 = p1.next

            if carry:
                p3.next = ListNode((p1.val +1) % 10)
                carry = (p1.val + 1) > 9
            else:
                p3.next = ListNode(p1.val)
                carry = (p1.val) > 9
            p3 = p3.next


        while p2.next != None:
            p2 = p2.next

            if carry:
                p3.next = ListNode((p2.val + 1) % 10)
                carry = (p2.val + 1) > 9
            else:
                p3.next = ListNode(p2.val)
                carry = (p2.val) > 9
            p3 = p3.next

        if carry:
            p3.next = ListNode(1)

        return answer