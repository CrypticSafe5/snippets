function kLargest(arr, n, k) {
	// loop over existing array seeing if greater than
	//     if less than, insert after
	// END: return first k items
	let output;
	for (const item of arr) {
		if (!output) {
			output = [item];
			continue;
		}

		console.log('OUTPUT> ', output);
		const medianIndex = Math.floor(output.length / 2);
		let startIndex = (output[medianIndex] > item) ? medianIndex + 1 : 0;
		if (startIndex === output.length) {
			output.push(item);
			continue;
		} else if (!startIndex) {
			output = [item, ...output];
		}
		console.log('length: ', output.length, ' startIndex: ', startIndex, ' item: ', item, ' median: ', output[medianIndex], ' test: ', output[medianIndex] < item);

		for (const index in output.slice(startIndex, n - medianIndex)) {
			if (output[index] > item) {
				output = [
					...output.slice(0, index),
					item,
					...output.slice(index)
				];
			}
		}
	}
	return output.slice(0, k);

	// 0.54
	// const test = [ ...arr ];
	// test.sort((a, b) => b - a);
	// return test.slice(0, k);
}


// (() => {
// 	const arr = [1, 23, 12, 9, 30, 2, 50];
// 	const n = arr.length;
// 	const k = 3;
// 	console.log(kLargest(arr, n, k));
// })();

(() => {
	const arr = [12, 5, 787, 1, 23];
	const n = arr.length;
	const k = 2;
	console.log(kLargest(arr, n, k));
})();
