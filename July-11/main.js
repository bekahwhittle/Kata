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

// while (friends.length => 1) {
//   console.log("liked this");
// }

// function likes(array) {
//   if (array == 0) {
//     console.log("no one liked this");
//   } else {
//     console.log(array + "liked this");
//   }
// }
// likes(["John", "Patrick", "Bekah", "Jamal"]);
// likes([]);
//
function likes (array) {
  console.log(array.toString() + " liked this");
  console.log(array.length);
}
likes(["Peter"]);
likes(["James", "Casey"]);
likes(["Devon", "Lisa", "Piggly"]);
likes(["Deeksha", "Lorde", "Diana", "Spiderman"]);
