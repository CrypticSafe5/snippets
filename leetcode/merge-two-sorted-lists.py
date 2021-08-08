# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
	l1_prime = l1
	l2_prime = l2

	# Extract data and build list
	sorted_list = []
	while l1_prime != None or l2_prime != None:
		if l1_prime == None:
			sorted_list.append(l2_prime.val)
			l2_prime = l2_prime.next
		elif l2_prime == None:
			sorted_list.append(l1_prime.val)
			l1_prime = l1_prime.next
		elif l1_prime.val > l2_prime.val:
			sorted_list.append(l2_prime.val)
			l2_prime = l2_prime.next
		else:
			sorted_list.append(l1_prime.val)
			l1_prime = l1_prime.next
	# Build linked list from list
	output = None
	for val in reversed(sorted_list):
		if output == None:
			output = ListNode(val)
		else:
			output = ListNode(val, output)
	return output
