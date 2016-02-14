// Description:

// You should write a function that takes a string and a positive integer n, splits the string into parts of n length and returns them in an array. It is ok for the last element to have less characters than n.

// If n is not a valid size(> 0) (or is absent), you should return an empty array.

// If n is greater than the lenght of the string, you should return an array with the only element being the same string.

// Examples:

// stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
// stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
// stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
// stringChunk('sunny day', 0) // []


// mine
function stringChunk(str, n) {
  var a = [];
  if(n==0) return a
  for(var i=0;i<str.length/n;i++){
    a.push(str.substring(n*i,n*i+n))
  }
  return a
}


// top vote solution
const stringChunk = (str, n) => str.match(RegExp(`.{1,${n/n*n}}`, 'g')) || [];