// Description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case


function isIsogram(str){
  var obj = {},
      arr = str.toLowerCase().split('');
  for(var i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;   
    }else{
      return false;
    }
  }
  return true;
}