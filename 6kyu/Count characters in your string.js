// Description:

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }


// mine
function count (string) { 
  var t = {};
  if(!string) return t;
  string.split('').sort().join('').match(/(\w)\1*/ig).map(x=>t[x[0]] = x.length);
  return t
}


// top vote solution
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}