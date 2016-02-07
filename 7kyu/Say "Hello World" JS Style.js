// Description:

// Write the definition of the function "say" such that calling this:

// say("Hello")("World")
// returns "Hello World"


// mine
var say = function(string1) {
  return function(){
    return string1 + ' ' + Array.prototype.slice.apply(arguments).join('')
  }
}



// top vote solution
var say = function(string1) {
  return function (string2) {
    return [string1, string2].join(' ');
  }
}