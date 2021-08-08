def isValid(self, s: str) -> bool:
	"""
	1. Find the pairs
	2. Remove the pairs from the string
	3. Repeat
	4. If empty string, return True, otherwise False
	"""
	s_copy = s
	pairs = [ '()', '{}', '[]']
	valid = True
	while valid:
		pair_found = False
		for pair in pairs:
			if pair in s_copy:
				pair_found = True
				s_copy = s_copy.replace(pair, '')
		if pair_found == False:
			valid = False
	return s_copy == ''
