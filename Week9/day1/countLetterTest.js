'use strict';

var test = require('tape');
var countLetter = require('./countLetter.js');

test('anagram tester', function (t) {

  t.deepEqual(countLetter('helloka'),  { h: 1, e: 1, l: 2, o: 1, k: 1, a: 1 }, 'test with a long string');
  t.deepEqual(countLetter('he'),  { h: 1, e: 1 }, 'test with a sort string');
  t.deepEqual(countLetter(''),  {}, 'test with empty string');
  t.deepEqual(countLetter(123),  { 1: 1, 2: 1, 3: 1}, 'test with numbers');
  t.end();
});