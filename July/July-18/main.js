// Your goal in this kata is to implement an difference function, which
// subtracts one list from another.
// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

console.log("🦊");

var arrA = [1, 2, 3, 4, 5]
var arrB = [2, 4, 6, 5, 7]
var arrC = []

arrA.forEach(function(numberA){
  console.log(numberA);
})
console.log("🍁🍁🍁🍁🍁🍁");
arrB.forEach(function(numberB) {
  console.log(numberB);
})
