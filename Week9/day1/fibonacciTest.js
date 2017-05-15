'use strict';

var test = require('tape');
var fibonacci = require('./fibonacci.js');

test('fibonacci tester', function (t) {

  t.equal(fibonacci(1),  1, 'test with one');
  t.equal(fibonacci(2),  1, 'test with two');
  t.equal(fibonacci(0),  0, 'test with null');
  t.equal(fibonacci(6),  8, 'test with a number');
  t.equal(fibonacci('anything'),  'Incorrect number', 'test with a string');
  t.equal(fibonacci(6.5),  'Incorrect number', 'test with a floating point number');
  t.end();
});