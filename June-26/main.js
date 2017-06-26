var fifthHarmony = ("Lauren Cabello, Dinah Jane, Ally Jane, Camila Cabello, Normani Jane")

function names (str) {
  var eachName = str.split(', ');
  var result = {};

  eachName.forEach(function(fullName, i, arr){
    var splitName = fullName.split(' ');
    var firstName = splitName[0];
    var lastName = splitName[1];

    if (result[lastName]) {
      result[lastName].push(firstName);
    } else {
      result[lastName] = [firstName];
    }
  });
  return result;
}
console.log(names(fifthHarmony));
// names("george washington, adam west, kanye west")
