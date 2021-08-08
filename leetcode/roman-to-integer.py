def romanToInt(self, s: str) -> int:
	hash = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}
	output = 0
	for letter in range(0, len(s)):
		if letter + 1 < len(s) and hash[s[letter]] < hash[s[letter + 1]]:
			output -= hash[s[letter]]
		else:
			output += hash[s[letter]]
	return output
