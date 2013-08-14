/*
 * roman-numerals
 * https://github.com/Per/roman-numerals
 *
 * Copyright (c) 2013 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var toRoman = function(number) {
  var romans = ['I', 'II', 'III', 'IV', 'V'];
  if (number === 0) {
    return '';
  }
  if (number === 9) {
    return 'IX';
  }
  var lim = [
    [6,  romans[number-1], number],
    [9,  'V', 5],
    [40, 'X', 10],
    [50, 'XL', 40],
    [90, 'L', 50],
    [100,'XC', 90],
    [400, 'C', 100],
    [500, 'CD', 400],
    [900, 'D', 500],
    [1000, 'CM', 900],
    [5000, 'M', 1000]
      ];
  for (var i = 0; i < lim.length; i++) {
    if (number < lim[i][0]) {
      return lim[i][1] + toRoman(number - lim[i][2]);
    }
  }
};

exports.toRoman = toRoman;
