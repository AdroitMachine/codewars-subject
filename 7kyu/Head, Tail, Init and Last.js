// Description:

// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// ¦Ë head [1,2,3,4,5]
// 1
// ¦Ë tail [1,2,3,4,5]
// [2,3,4,5]
// ¦Ë init [1,2,3,4,5]
// [1,2,3,4]
// ¦Ë last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

// PLEASE NOTE: Clojure's last function shall be called last_ to prevent name clashes.


// mine
head = x=>x[0];
tail = x=>x.slice(1);
init = x=>x.slice(0,-1);
last = x=>x[x.length-1];



// top vote solution
function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) {return a.slice(1)}