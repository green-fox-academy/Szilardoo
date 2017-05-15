'use strict';

var test = require('tape');
var sum = require('./sum.js');

test('test sum', function (t) {

	t.equal(sum([1,2,3,4,5,6]), 21, 'test with a normal list');
	t.equal(sum([]), 0, 'test with empty list');
	t.equal(sum([5]), 5, 'test with one element');
	t.equal(sum(0), 0, 'test with null');
	t.equal(sum('asd'), 0, 'test with string');
	t.equal(sum(['asd']), 0, 'test with string');
	t.end();
});



