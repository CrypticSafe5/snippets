function test1() {
	// https://www.reddit.com/r/learnjavascript/comments/llau8d/javascript_object_merge/
	function merge(a, b, ...c) {
		if (a === null || a === undefined || typeof a !== 'object') return b ?? {};
		if (b === null || b === undefined) return a ?? {};

		let obj = Array.isArray(a) ? [...a] : a;

		for (const key in b) {
			if (b.hasOwnProperty(key)) {
				obj[key] = merge(obj[key], b[key]);
			}
		}

		for (const next of c) obj = merge(obj, next);
		return obj;
	}

	console.log(JSON.stringify(merge(
		{
			test1: {
				hello: 'hi'
			},
			test2: {
				hi: 'hello',
				another: 'value'
			}
		},
		{
			test2: {
				hello: 'hi',
				hi: 'help',
				test: 1234
			},
			test3: {
				hi: 'hello'
			}
		},
		{
			test2: {
				hi: 'new val'
			},
			test3: {
				hello: 'also new val'
			}
		}
	), null, '\t'));
}

function test2() {
	async function merge(base, merger, ...others) {
		let final = {};
		for (const key in base) {
			if (!merger.hasOwnProperty(key)) {
				final[key] = base[key];
				continue;
			}
			if (
				typeof base[key] !== typeof merger[key]
				|| Array.isArray(base[key]) !== Array.isArray(merger[key])
			) throw Error('Non-matching schema');
			if (typeof base[key] === 'object' && !Array.isArray(base[key])) {
				final[key] = await merge(base[key], merger[key]);
				continue;
			}
			final[key] = merger[key];
		}
		const newKeys = Object.keys(merger).filter((e) => !Object.keys(base).includes(e));
		for (const key of newKeys) final[key] = merger[key];
		for (const otherMerger of others) final = await merge(final, otherMerger);

		return final;
	}

	merge(
		{
			test1: {
				hello: 'hi'
			},
			test2: {
				hi: 'hello',
				another: 'value'
			}
		},
		{
			test2: {
				hello: 'hi',
				hi: 'help',
				test: {
					test3: {
						hell: 'on earth'
					}
				}
			},
			test3: {
				hi: 'hello'
			}
		},
		{
			test2: {
				hi: 'new val'
			},
			test3: {
				hello: 'also new val'
			}
		}
	)
		.then(e => console.log(JSON.stringify(e, null, '\t')))
		.catch(console.error);
}

test1();
test2();
