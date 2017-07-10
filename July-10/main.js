// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you must
// multiply the digits in num until you reach a single digit.


function persistence(num) {
  function multiply (int) {
    return int.reduce(function (a, b) {
        return a * b;
      });
  }
  var count = 0;

  while(num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);
    count ++;
  }
  return count;
}

console.log(persistence(30));
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));
