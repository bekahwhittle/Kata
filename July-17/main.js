console.log("what's up?!");

// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a string that
// contains only letters is an isogram. Assume the empty string is an isogram.
// Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str) {
  var letters = str.toUpperCase().split("");
  var checkLetters = [];

  letters.forEach(function(letter){
    if (checkLetters.indexOf(letter) === -1) {
      checkLetters.push(letter);
      console.log(checkLetters);
    }
  })
  if (checkLetters.length === letters.length) {
    console.log("✅");
  } else {
    console.log("❌");;
  }
}


isIsogram("Dermatoglyphics");
isIsogram("aba");
isIsogram("moOse");
isIsogram("hello");
