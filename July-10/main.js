// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you must
// multiply the digits in num until you reach a single digit.


var count = 0;

function persistence(num) {

  function multiply (int) {
    return int.reduce(
      function (a, b) {
        return a * b;
      }
    );
  }

  while(num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);
    count ++
  }

  return count;

}

console.log(persistence(30));
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));


function times (a, b) {
  return a * b;
}
console.log(times(3,9)); // gives us 27
console.log(times(2,7)); // gives us 14
console.log(times(1,4)); // gives us 4 - persistence(39) == 4
