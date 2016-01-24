// Description:

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("


// mine
function duplicateEncode(word){
    word = word.toLowerCase();
    var a = [];
    for(var i=0;i<word.length;i++){
      var r = new RegExp(word[i].replace(/[^a-zA-Z0-9]/g,"\\" + word[i]),'g');
      word.match(r).length>1?a.push(')'):a.push('(');
    }
    return a.join('');
}


// top vote solution
function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}