//Function Type Signature
// changer :: Number -> [Number]
//
//   changer(1)  == [1]
//   changer(2)  == [1, 1]
//   changer(5)  == [5]
//   changer(25) == [25]
//   changer(50) == [25, 25]
//   changer(54) == [25, 25, 1, 1, 1, 1]
//   changer(99) == [25, 25, 25, 10, 10, 1, 1, 1, 1]

function changer(num) {
  var arr = [];
  var pennies = [1];

  if (num < 5) {
    var newArr = arr.push(pennies);

  }


  console.log(arr);
};
changer(3);
