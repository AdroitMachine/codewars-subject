// Description:

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// mine
function accum(s) {
  return s.toLowerCase().split('').map((x,y) => x.toUpperCase()+new Array(y+1).join(x)).join('-');
}


// top vote solution
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}