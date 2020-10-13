import test from 'ava';
import webButtonStyles from '.';

test('title', t => {
	t.throws(() => {
		webButtonStyles(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(webButtonStyles('unicorns'), 'unicorns & rainbows');
});
