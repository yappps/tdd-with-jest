const fizzbuzz = require("../src/fizzbuzz");

test.skip('fizzbuzz() shoud return "fizz" if number is dividable by 3', function() {
  expect(fizzbuzz('6')).toEqual('fizz');
});

test.skip('fizzbuzz() should return "buzz" id the number is dividable by 5', function() {
  expect(fizzbuzz('10')).toEqual('buzz');
});

test.skip('should return "fizzbuzz" if number is dividable by 15', function() {
  expect(fizzbuzz('30')).toEqual('fizzbuzz'); 
});

test.skip('should return number if it does not met all 3 requirements', function() {
  expect (fizzbuzz('4')).toEqual('4'); 
});

test.skip("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

