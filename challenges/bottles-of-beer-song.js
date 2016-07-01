/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE


function countDown (bottles) {
  for (var i = bottles; i > 0; i-- ) {

    if (i>2) {
      console.log(i + " bottles of beer on the wall,");
      console.log(i + " bottles of beer!");
      console.log(" Take one down and pass it around,");
      console.log(i-1 + " bottles of beer on the wall...");
      console.log(" ");
    }
    else if (i===2) {
      console.log(i + " bottle of beer on the wall,");
      console.log(i + " bottle of beer!");
      console.log(" Take one down and pass it around,");
      console.log(i-1 + " bottles of beer on the wall...");
      console.log(" ");

    }
     else {
      console.log(i + " bottles of beer on the wall,");
      console.log(i + " bottles of beer!");
      console.log(" Take it down and pass it around,");
      console.log("No more" + " bottles of beer on the wall...");
      console.log(" ");

    }
  }
}
  countDown()
