# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        try:
            depth = 0
            current_nodes = [root]
            previous_nodes = []

            while len(current_nodes) > 0:
                previous_nodes = current_nodes
                current_nodes = []
                depth += 1
                for node in previous_nodes:
                    if node.left:
                        current_nodes.append(node.left)
                    if node.right:
                        current_nodes.append(node.right)
            return depth
        except:
            return 0
