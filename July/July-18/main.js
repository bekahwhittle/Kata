// Your goal in this kata is to implement an difference function, which
// subtracts one list from another.
// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

console.log("🦊");

function array_diff (arrA, arrB) {
  var arrC = []
  var arrD = []

  for (var i = 0; i < arrA.length; i++) {
    if (arrC.indexOf(arrA[i]) === -1 ) {
       arrC.push(arrA[i]);
       console.log("first", arrC);
    for (var j = 0; j < arrC.length; j++) {
      if (arrB.indexOf(arrC[j]) === -1) {
        console.log("second", arrC[j], arrD);
        }
      }
    }
  }
}

array_diff([1, 2, 3, 4, 5], [2, 4, 5, 6, 7]); // [1, 3, 7, 6]
// array_diff([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
