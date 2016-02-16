// Description:

// Create a function that checks if a number is odd.

// Expect negative and decimal numbers too. For negative numbers, return true if its absolute value is odd. For decimal numbers, return true only if the number is equal to its integer part and the integer part is odd.

// Examples

// Example:
// isOdd(2)--> false
// isOdd(5)--> true
// isOdd(4)--> false
// isOdd(-17)--> true
// isOdd(-7.0)--> true
// isOdd(-7.1)--> false
// isOdd(4.23)--> false
// isOdd(5.0)-->true
// isOdd(5.23)--> false


// mine
function isOdd(n) {
  if (~~n != n) return false
  return n%2 != 0 
}



// top vote solution
function isOdd(n) {
  return Math.abs(n % 2) == 1  
}