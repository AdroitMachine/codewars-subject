// Description:

// Given few numbers, you need to print out the digits that are not being used.

// Example:

// unusedDigits(12, 34, 56, 78) // "09"
// unusedDigits(2015, 8, 26) // "3479"
// Note:

// Result string should be sorted
// The test case won't pass Integer with leading zero


function unusedDigits(){
  var a = '0123456789'.match(new RegExp('[^' + Array.prototype.slice.apply(arguments).join('') + ']','g'));
  if(a != null){
    return a.sort((a,b)=>a-b).join('')
  }
  return '';
}