// Description:

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.


// mine
function getCount(str) {
  return str.replace(/[^aeiou]/ig, "" ).length
}



// top vote solution
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}