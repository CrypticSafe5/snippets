def reverse(x):
	signed_positive = True
	max_int = 2147483647
	if x < 0:
		signed_positive = False
		x *= -1
	string_input = str(x)
	reversed_input = ''
	for index in range(1, len(string_input) + 1):
		reversed_input += string_input[index * -1]
	final_int = int(reversed_input)
	if final_int > max_int:
		return 0
	elif signed_positive == True:
		return final_int
	else:
		return final_int * -1

print(reverse(-123))
