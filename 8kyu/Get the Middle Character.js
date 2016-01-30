// Description:

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// Input

// A word (string) of length 0 < str < 1000

// Output

// The middle character(s) of the word represented as a string.


// mine
function getMiddle(s){
  if(s.length%2==0){
    return s[s.length/2-1]+s[s.length/2]
  }else{
    return s[(s.length+1)/2-1]
  }
}


// top vote solution
function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}