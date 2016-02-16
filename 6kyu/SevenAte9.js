// Description:

// Write a function that removes each 9 that it is in between 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'
// Input: String Output: String


// mine
function sevenAte9(str){
  return str.replace(/79(?=7)/g, '7');
}



// top vote solution
function sevenAte9(str){
  return str.replace(/79(?=7)/g, '7');
}