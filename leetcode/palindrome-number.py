def isPalindrome(self, x: int) -> bool:
	flipped = str(x)[::-1]
	if flipped == str(x):
		return True
	else:
		return False

def isPalindrome(self, x: int) => bool:
		if x < 0:
            return False
        return int(str(x)[::-1]) == x
	
