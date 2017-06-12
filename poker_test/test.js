'use strict';

var test = require('tape');
var poker = require('./poker.js');

const highCardBlackPlayer = ['2H', '3D', '5S', '9C', 'KD'];
const highCardWhitePlayer = ['2C', '3H', '4S', '8C', 'AH'];

const highCardBlackPlayer01 = ['2H', '3D', '5S', '9C', '4D'];
const highCardWhitePlayer01 = ['2C', '3H', '4S', '8C', '5H'];

test('High card test white should win', function (t) {
  t.equal(poker(highCardBlackPlayer, highCardWhitePlayer), 'white - with high card: Ace');
  t.end();
});

test('High card test black should win', function (t) {
  t.equal(poker(highCardBlackPlayer01, highCardWhitePlayer01), 'black - with high card: 9');
  t.end();
});