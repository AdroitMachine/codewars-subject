// Description:

// Create a function which answers the question "Are you playing Banjo?". If your name starts with the letter "R" or lower case "r", you are playing Banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// C# name + "plays banjo" name + "does not play banjo"

// Names given are always valid strings.


// mine
function areYouPlayingBanjo(name) {
  switch(name[0].toLowerCase()){
    case 'r' : return name + ' plays banjo';
    break;
    default : return name + ' does not play banjo'
  }
}


// top vote solution
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}