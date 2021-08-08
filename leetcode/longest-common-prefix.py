def longestCommonPrefix(self, strs: List[str]) -> str:
	shortest_string = strs[0]
	output = ''
	for string in strs:
		if len(string) < len(shortest_string):
			shortest_string = string
	for i in range(0, len(shortest_string)):
		for string in strs:
			if string[i] != shortest_string[i]:
				return output
		output += shortest_string[i]
	return output
