# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        print(root.val)
        if root.val == val:
            return root

        if root.val < val:
            if root.right:
                return self.searchBST(root.right, val)
            return None

        if val < root.val:
            if root.left:
                return self.searchBST(root.left, val)
            return None
