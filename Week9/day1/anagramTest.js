'use strict';

var test = require('tape');
var anagram = require('./anagram.js');

test('anagram tester', function (t) {

  t.equal(anagram('helloka', 'kohella'), true);
  t.equal(anagram('anything', 'anything'), true);
  t.equal(anagram('aaaa', 'AAAA'), false);
  t.equal(anagram('aaa', 'aab'), false);
  t.end();
});