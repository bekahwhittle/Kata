// Write a function called fizzbuzz that takes a number as its only argument
// and returns a string.
//
// If the number given is divisible by 3, return 'fizz'
// If the number given is divisible by 5, return 'buzz'
// If the number given is divisible by 3 and by 5, return 'fizzbuzz'
// If the number is any other number then return that number as a string.
// After you have written the above function, write a loop that will console.log
// the result of every number 1 - 100 being given to your fizzbuzz function.
//

function fizzBuzz(num) {

  if (num % 5 === 0 && num % 3 === 0) {
    console.log("fizzbuzz");
  } else if (num % 3 === 0) {
    console.log("buzz");
  } else if (num % 5 === 0) {
    console.log("fizz");
  } else {
    console.log(num);
  }

}
fizzBuzz(35);
fizzBuzz(21);
fizzBuzz(99);
fizzBuzz(12);
