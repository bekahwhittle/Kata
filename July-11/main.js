// You probably know the "like" system from Facebook and other pages. People can
// "like" blog posts, pictures or other items. We want to create the text that
// should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input
// array, containing the names of people who like an item. It must return the
// display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others
// like this"
console.log("hi");


//
function likes (array) {
  if (array.length === 0) {
    console.log("Sadly no one has liked this!");
  } else if (array.length === 1) {
    console.log(array + " likes this");
  } else if (array.length === 2) {
    var names = array.toString().split(",");
    console.log(names[0] + " and " + names[1] + " likes this");
  } else if (array.length === 3) {
    var people = array.toString().split(",");
    console.log(people[0] + ", " + people[1] + " and " + people[2] + " like this");
  } else {
    var likers = array.toString().split(",");
    var num = likers.length - 2;
    console.log(likers[0] + ", " + likers[1] + " and " + num + " others");
  }
  // console.log(array.toString() + " like this");
  // console.log(array.length);
}
likes([]);
likes(["Peter"]);
likes(["James", "Casey"]);
likes(["Devon", "Lisa", "Piggly"]);
likes(["Deeksha", "Lorde", "Diana", "Spiderman", "Devon", "Lisa", "Piggly"]);
