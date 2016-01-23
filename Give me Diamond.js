// Description:

// This kata is to practice simple string output. Jamie is a programmer, and girlfriend of James. She likes diamonds, and this time she expects String of diamond from James. As James doesn't know how to do it, he needs your help.

// Task:

// You need to print a shape on the screen using asterisk ("*") characters.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number (as it is not possible to print diamond with even number).

// Please see provided test case(s) for examples.

// Python Note

// Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

// JS Note

// JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.


function diamond(n){
  if(typeof n != 'number' || n%2 == 0 || n<0){
    return null;
  }
  var c = (n+1)/2;
  var s = '';
  for(var i=1;i<=n;i++){
    s += (new Array(Math.abs(c-i)+1).join(' ') + new Array(n-2*Math.abs(c-i)+1).join('*')+'\n');
  }
  return s;
}