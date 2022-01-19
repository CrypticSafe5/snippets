// const logs = [
// 	'88 99 50',
// 	'99 77 30',
// 	'99 22 30',
// 	'99 88 100',
// 	'12 12 40'
// ];
// const threshold = 2;

// const main = (logs, threshold) => {
// 	let obj = {};
// 	logs.forEach((entry) => {
// 		const [sendId, receiveId, transAmt] = entry.split(' ');
// 		if (!obj[sendId]) obj[sendId] = 1;
// 		if (!obj[receiveId]) obj[receiveId] = 1;
// 		if (sendId !== receiveId) {
// 			obj[sendId] += 1;
// 			obj[receiveId] += 1;
// 		} else {
// 			obj[sendId] += 1;
// 		}
// 	});
// 	console.log(obj);
// 	return Object.keys(obj).filter(entry => obj[entry] >= threshold);
// };

// console.log(main(logs, threshold));

// =======

// const threshold = 2;
// const logs = [
// 	'88 99 50',
// 	'99 77 30',
// 	'99 22 30',
// 	'99 88 100',
// 	'12 12 40'
// ];
// const output = [];
// const counts = {};

// for (const log of logs) {
// 	const [e1, e2] = log.split(' ');
// 	if (e1 === e2) {
// 		counts[e1] = (counts[e1]) ? counts[e1] + 1 : 1;
// 	} else {
// 		counts[e1] = (counts[e1]) ? counts[e1] + 1 : 1;
// 		counts[e2] = (counts[e2]) ? counts[e2] + 1 : 1;
// 	}
// 	if (counts[e1] >= threshold) output.push(e1);
// 	if (counts[e2] >= threshold) output.push(e2);
// }

// console.log(Array.from(new Set(output)));

// =======

function main(startingIndices, endingIndices) {
	const input = '*|**|||*||*||******|*|*||*||||||**|*|||**|||***|';
	const output = [];

	for (const index of startingIndices) {
		const raw = input.split('|').slice(startingIndices[index], endingIndices[index] + 1);
		if (raw[0]) raw.shift();
		if (raw[raw.length - 1]) raw.pop();
		const cleaned = raw.join('');
		output.push(cleaned.length);
	}
	console.log(output);
}

main([1, 1], [5, 6]);
