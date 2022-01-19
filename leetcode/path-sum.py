# https://leetcode.com/problems/path-sum/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        next_index = lambda i: (2 * i) + 1
		depth = 0
		stack = [root]
		current_nodes = [root]
		previous_nodes = []

		# Build stack
		while len(current_nodes) > 0:
			previous_nodes = current_nodes
			current_nodes = []
			depth += 1
			for node in previous_nodes:
				if node is None:
					current_nodes.extend([None, None])
					continue
				current_nodes.append(node.left if node.left else None)
				current_nodes.append(node.right if node.right else None)
			stack.extend(current_nodes)
		# Incomplete
		# Traverse DFS and calculate sums, if == targetSum, return True
		while True:
			try:
				index = 0
				branch = []
				# Calculate indices
				while index < depth and :
					branch.append(stack[index])
					index = next_index(index)
				if sum(branch) == targetSum:
					return True
		return False
