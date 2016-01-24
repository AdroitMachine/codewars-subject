// Description:

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34




// mine
function twoDecimalPlaces(n) {
  return +(Math.round(n*100)/100).toFixed(2);
}


// top vote solution
// 但是验证不通过
// Test twoDecimalPlaces
// works for some examples
// worked for 2.675 - Expected: 2.68, instead got: 2.67
const twoDecimalPlaces = n =>  Number(n.toFixed(2))