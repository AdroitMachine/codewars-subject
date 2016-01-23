// Description:

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


function uniqueInOrder(iterable){
  if(Object.prototype.toString.call(iterable) == '[object Array]'){
    if(iterable.length<1){
      return [];
    }else{
      iterable=iterable.join('')
    }
  }
  return iterable.match(/([a-zA-Z0-9])\1*/g) == null? []:iterable.match(/([a-zA-Z0-9])\1*/g).map(x=> isNaN(+x.substring(0,1))?x.substring(0,1):+x.substring(0,1))
}