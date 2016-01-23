#Codewars-subject

##Introduction:

######Codewars是个编程任务平台，提供支持多种编程语言，包括Javascript、Python、C#、CoffeeScript等编程语言。平台上的任务难度不等，可以不同程度的锻炼编程能力，并且还可以看到别人的解决方法，可以从中学习到巧妙的技巧。


######该repository是在Codewars中做过的题目的汇总。

##Subject:

###1.Give me Diamond

Description:

This kata is to practice simple string output. Jamie is a programmer, and girlfriend of James. She likes diamonds, and this time she expects String of diamond from James. As James doesn't know how to do it, he needs your help.

Task:

You need to print a shape on the screen using asterisk ("*") characters.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number (as it is not possible to print diamond with even number).

Please see provided test case(s) for examples.

Python Note

Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

JS Note

JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

```javascript
function diamond(n){
  if(typeof n != 'number' || n%2 == 0 || n<0){
    return null;
  }
  var c = (n+1)/2;
  var s = '';
  for(var i=1;i<=n;i++){
    s += (new Array(Math.abs(c-i)+1).join(' ') + new Array(n-2*Math.abs(c-i)+1).join('*')+'\n');
  }
  return s;
}
```

###2.Duplicate Encoder

Description:

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("


```javascript
function duplicateEncode(word){
    word = word.toLowerCase();
    var a = [];
    for(var i=0;i<word.length;i++){
      var r = new RegExp(word[i].replace(/[^a-zA-Z0-9]/g,"\\" + word[i]),'g');
      word.match(r).length>1?a.push(')'):a.push('(');
    }
    return a.join('');
}
```
###3.Replace With Alphabet Position

Description:

Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

```javascript
function alphabetPosition(text) {
  var str = '';
  text.replace(/[^a-zA-Z]+/g,'').toLowerCase().split('').map(x=> str += (x.charCodeAt()-96 + ' '));
  return str.slice(0,-1);
}
```

###4.Playing with digits

Description:

Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.

Note: n, p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

```javascript
function digPow(n, p){
  var total = 0;
  (''+n).split('').map(function(num,i){
    total += Math.pow(num,i+p);
  })
  return String(total/n).indexOf('.')<0? total/n : -1; 
}
```

###5.String to integer conversion

Description:

JavaScript provides a built-in parseInt method.

It can be used like this:

parseInt("10") returns 10
parseInt("10 apples") also returns 10
We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

You are asked to write a myParseInt method with the following rules:

It should make the conversion if the given string only contains a single integer value (and eventually spaces - including tabs, line feeds... - at both ends)
For all other strings (including the ones representing float values), it should return NaN
It should assume that all numbers are not signed and written in base 10.


```javascript
function myParseInt(str) {
  return /^\d+$/g.test(str.replace(/(^\s*)?(\s*$)?/g,''))? +str : "NaN";
}
```
