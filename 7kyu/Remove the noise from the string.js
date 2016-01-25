// Description:

// We have a broken message machine that introduces noise to our incoming messages. We know that our messages are written using a-zA-Z0-9, white characters (like spaces or tabs) and some punctuation chars. Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message (noise can have only %$&/#·@|º\ª chars).

// Your mission is to write a function which removes this noise from the message.

// For example:

// removeNoise("h%e&·%$·llo w&%or&$l·$%d")
// // returns hello world


// mine 
function removeNoise(str){
  return str.replace(/[\%\$\&\/\#\·\@\|\º\\\ª]*/ig,'')
}


// top vote solution
var str;
function removeNoise(str){
  return str.replace(/[%$&\/#·@|º\\ª]/g, "");
}