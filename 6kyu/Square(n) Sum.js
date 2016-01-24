// Description:

// Complete the squareSum method so that it squares each number passed into it and then sums the results together.

// For example:

// squareSum([1, 2, 2]); // should return 9



// top vote solution
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}


// mine
function squareSum(numbers){
  return numbers.map(x=>x*x).reduce((x,y)=>x+y,0)
}
