//Given a string of numbers the adder method should be able to add pairs of numbers together.

//Example Input:  "1 1 2 2 3 3"
//Example Output: "2 4 6"

//Example Input:  "1 2 3 4 5 6"
//Example Output: "3 7 11"

//Note: If there is an odd number of numbers the last number in the string is not added with a number.

//Example Input:  "1 1 2 2 3 3 3"
//Example Output: "2 4 6 3"

//Remember: Please implement by test driving the code.

//Extra Credit:

//Given that a string of numbers contains special characters you should be able to add the pair of numbers together
//stripping any extra whitespace.

//Example Input:  "[1  2]     (5     5)    {6 6}"
//Example Output: "[3] (10) {12}"
 
var example_inputs = [
  "1 1 2 2 3 3",
  "9 10 77 5",
  "1 2 3",
  "[1 2] [3 4] [5 6] 7 8",
  "{1         1}         [2   2] 5"
];
  
var example_outputs = [
  "2 4 6",
  "19 82",
  "3 3",
  "[3] [7] [11] 15",
  "{2} [4] 5"
];

module.exports = function adder(input) {

};
