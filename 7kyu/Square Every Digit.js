// Description:

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer


// mine 
function squareDigits(num){
  return ~~(num.toString().split('').map(x=>x*x).join('')) 
}



// top vote solution
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}