// // Function to print odd numbers between 1 and 25
// function printOddNumbers() {
//   for (let i = 1; i <= 25; i++) {
//     if (i % 2 !== 0) {   // Check if number is odd
//       console.log(i);
//     }
//   }
// }

// // Calling the function
// printOddNumbers();

// Function to check if a number is odd or even
function isOddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";  // divisible by 2 → Even
  } else {
    return "Odd";   // not divisible by 2 → Odd
  }
}

// Declare and initialize a variable
let myNumber = 13;

// Call the function and print the result
console.log("The number " + myNumber + " is " + isOddOrEven(myNumber));

