// Regex 

// Regex methods and properties in JS

// Simple regex declaration --> object.

let patt = /something/i //--> something is the pattern --> i is the modifier.


// Declaration using a constructor object.

let patttern = new RegExp('Hello World' , 'g');
let res = patttern.constructor; // constructor function returned.


// Regex methods/


let patt = /man/gi
let str = "man and woman"
let str2 = str.replace(patt , "person");

patt = /(wo)?man/gi  //--> search fpr both man and woman 
patt.compile(patt); // --> compiles the pattern to create a regex matching object.



console.log(patt.test(str)) //true --> returns if a match found or not
str2 = str.replace(patt , "person") // ---> replace the given pattern matches with person.
console.log(patt.exec(str)) // returns the exact text that matches with pattern in given string.


// Modifiers in regex.


// g modifier --> used for global string search.

// i modifier --> used for case insensitive search.

// gi modifier --> used for global case insensitive search.


console.log(patt.global) // true --> returns if global flag set.
console.log(patt.ignoreCase) // true --> return if i flags set.

str = "Hello world, my name is John Doe."



let patt5 = /o/g;

patt5.compile(patt5);

while(patt5.test(str))
{
    console.log(patt5.lastIndex); // --> returns the char position exactly after the match.

}

// m modifier --> multline search.

str = "New lines \n New are awesome \n";
let patt6 = /^New/m
console.log(patt6.multiline); // true




// Regular Expressions --> Core regex.

// 1. ''+ --> checks for more than one existence of patt

str = "Hello World";
patt = /o/+g;
patt.compile(patt);
patt.test(str);

// w+ --> returns one or more word cchracters.


patt = /\w+/g

//2 ''* ---> checks for zeror or more existence. 

patt = /lo*/g

//3 ''? --> checks for zero or one existence.

patt = /10?/g

//4 ''{n} --> checks for n existence of the patterns.

patt = /\d{4}/g //--> returns match for all 4 digit numbers.

//5 ''{n,m} --> checks for n to m existence of pattern

patt = /\d{3,4}/g // --> checks for 3-4 existence of digits.

//6 ''{n,} --> checks for >=n existence of patt

patt = /\d{3,}/g // --> >=3 digit numbers

//7 ''$ --> checks for patt at end of string

patt = /hello$/g; // --> hello at end of stringg

//8 ''^ --> checks for patt at string start

patt = /^hello/g // --> hello at string start

///9 ''(?="") --> checks for '' followed by "" --> match returns ''

patt = /is(?=all)/g

//10 ''(?! "") --> not followed.

patt1 = /is(?! all)/g

// --> js source method --> returns the text of regex

console.log(/kushagra/g.source) // --> returns 'kushagra'

// [abc]

// 1. [abcde.. ]--> match for any char in the brackets.
// 2. [A-Z] --> match for uppercase A to Z
// 3. [a-z] --> match for lowercase a to z
// 4. [A-z] --> any char from A to z
// 5. [^abcd] --> any char NOT in the brackets.
// 6. ^[abcde] --> starting with a bracket char.


// Same rules apply for 0-9 --> specify range for pattern matching.

// /(patt1|patt2)/g --> any of the patt1 or patt2


// Metachars

/*

\\p--> something
\\P --> !something

1.  \\w --> word chars in string
2.  \\W --> non word chars
3. \\d --> digit chars
4. \\D --> non digit chars
5.  \\s --> space chars
6. \\S --> Non space
7. \\bLO\ --> beginning of the string
8. \\0 --> null char
9. \\n --> newline char
10. \\f --> form feed char --> -1  or 1
11. \\t --> tab char
12. \\v --> vertical tab char
13. \\xxx --> octal number
14. \\xdd --> hexadecimal num [dd --> some digits]
15. \\udddd --> hexnumber dddd




































*/
















