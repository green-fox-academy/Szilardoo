'use strict';

var test = require('tape');
var getApple = require('./apples.js');

test('get apple', function (t) {
  var actual = getApple();
  var expected = 'apples';

  t.equal(actual, expected);
  t.end();
});