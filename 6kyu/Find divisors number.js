// Description:

// Find the number of divisors of a positive integer n.


// mine
function getDivisorsCnt(n) {
  var d = 0;
  for (var i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  return d;
}



// top vote solution
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}