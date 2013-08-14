'use strict';

var roman_numerals = require('../lib/roman-numerals.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var tests = {};
var add_test = function(number, expected) {
  tests[number + ' > ' + expected] = function(test) {
    test.expect(1);
    test.equal(roman_numerals.toRoman(number), expected);
    test.done();
  };  
};

add_test(1, 'I');
add_test(2, 'II');
add_test(3, 'III');
add_test(4, 'IV');
add_test(5, 'V');
add_test(6, 'VI');
add_test(9, 'IX');
add_test(10, 'X');
add_test(11, 'XI');
add_test(19, 'XIX');
add_test(37, 'XXXVII');
add_test(40, 'XL');
add_test(49, 'XLIX');
add_test(50, 'L');
add_test(57, 'LVII');
add_test(89, 'LXXXIX');
add_test(90, 'XC');
add_test(99, 'XCIX');
add_test(100,'C');
add_test(376,'CCCLXXVI');
add_test(400,'CD');
add_test(499, 'CDXCIX');
add_test(500, 'D');
add_test(899, 'DCCCXCIX');
add_test(900, 'CM');
add_test(999, 'CMXCIX');
add_test(1000, 'M');
add_test(2767, 'MMDCCLXVII');
add_test(1998, 'MCMXCVIII');
add_test(3000, 'MMM');
add_test(4999, 'MMMMCMXCIX');


exports['roman numerals test'] = tests;
