class Solution:
	def removeDuplicates(nums) -> int:
		index = 0
		while index < len(nums):
			val = nums[index]
			i = index + 1
			while i < len(nums):
				if nums[i] == val:
					nums.pop(i)
				else:
					i += 1
			index += 1
