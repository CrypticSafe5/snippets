/*
Input:
LinkedList: 1->2->2->4->5->6->7->8
K = 4
Output: 4 2 2 1 8 7 6 5 
Explanation: 
The first 4 elements 1,2,2,4 are reversed first 
and then the next 4 elements 5,6,7,8. Hence, the 
resultant linked list is 4->2->2->1->8->7->6->5.
*/

/*
Input:
LinkedList: 1->2->3->4->5
K = 3
Output: 3 2 1 5 4 
Explanation: 
The first 3 elements are 1,2,3 are reversed 
first and then elements 4,5 are reversed.Hence, 
the resultant linked list is 3->2->1->5->4.
*/

/*
node:
object Node {
  data: 1,
  next: Node { data: 2, next: [Node] }
}

k:
number 4
*/

function reverse(node, k) {
	const extract = (e) => {
		const thing = (e.next) ? extract(e.next) : [];
		return [e.data, ...thing];
	};

	const build = (arr) => {
		return {
			data: arr[0],
			next: (arr.length > 1) ? build(arr.slice(1)) : null
		};
	};

	const data = extract(node);
	let stagedData = [];
	for (let i = 0; i < data.length; i += k) {
		if (k > data.length) break;
		const tmp = data.slice(i, i + k);
		tmp.reverse();
		stagedData.push(...tmp);
	}
	if (data.length % k) {
		const lastIndex = data.length % k;
		const tmp = data.slice(data.length - lastIndex, (lastIndex + 1));
		stagedData.push(...tmp);
	}
	return build(stagedData);
}

// function reverse1(node, k) {
// 	const build = (e, payload, buffer = [], i = 0) => {
// 		if (i === k) {
// 			// Update payload from buffer and clear

// 			i = -1;
// 		} else {
// 			buffer.push(e.data);
// 		}
// 		if (e.next) {
// 			const data = build(e.next, payload, buffer, i + 1);
// 		} else {
// 			if (buffer.length) {
// 				// Update payload from buffer and clear
// 			}
// 		}
// 		return payload;
// 	};
// 	return build(node);
// }

function reverse2(node, k) {
	if (k === 1) return node;
	let stagedData = [];
	let buffData = [];
	const extract = (e) => {
		if (buffData.length === k) {
			buffData.reverse();
			stagedData.push(...buffData);
			buffData = [];
		}
		buffData.push(e.data);
		if (e.next) {
			extract(e.next);
		} else {
			buffData.reverse();
			stagedData.push(...buffData);
			buffData = [];
		}
	};

	const build = (arr) => {
		return {
			data: arr[0],
			next: (arr.length > 1) ? build(arr.slice(1)) : null
		};
	};

	extract(node);
	return build(stagedData);
}

console.log(reverse2({ data: 8, next: { data: 5 } }));
