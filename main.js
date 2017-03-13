// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(a,b) {
  return a + b;
}
// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3), 5);
console.assert(sum(1,0), 1);
console.assert(sum(-48,5), 43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg( a, b, c ) {
  return (a + b + c)/3;
}
// write your console.log/asserts here:
console.log('avg of 4, 6, and 8 is ', avg(4, 6, 8));
console.assert(avg(4, 6, 8), 6);
console.assert(avg(3, 0, 11),  4.6);
console.assert(avg(-6, 5, 8),  2.3)

// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(str) {
  return str.length;
}
// write your console.log/asserts here:
console.log('The length of Devon is: ', getLength('Devon'));
console.assert(getLength('can'), 3);
console.assert(getLength('Tesla'), 5);
console.assert(getLength('The Oatmeal'), 11);

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(a, b) {
  if (b > a) {
  return true;
  } else {
    return false;
  }
}
// write your console.log/asserts here:
console.log('Is 5 greater than 3? ', greaterThan(3, 5));
console.assert(greaterThan(0, 100), true);
console.assert(greaterThan(-1, 4), false);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name) {
  return 'Hello, ' + name + '!';
}
// write your console.log/asserts here:
console.log('This says hello:', greet('The Blerch'));
console.assert(greet('Marvin'), 'Hello, Marvin!');
console.assert(greet('Devon'), 'Hello, Devon');

// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib(noun, pastTenseVerb, num, adj) {
  return noun + ' ' + pastTenseVerb + ' for ' + num + ' ' + adj + ' days' + ' and then stopped.';
}
// write your console.log/asserts here:
console.log('My sentence says: ', madlib('Joey', 'stood', 18, 'sunny'));
console.assert(madlib('Colonel Mustard', 'bludgeoned', 4, 'red'), 'Colonel Mustard bludgeoned for 4 red days and then stopped.');

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// write your console.log/asserts here:
console.log('what number is larger, 5 or 9?, ', max(5, 9));
console.assert(max(28, -200), 28);
console.assert(max(56, 7), 56);

// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
}
// write your console.log/asserts here:
console.log('The greatest number is: ', maxOfThree(200, 50, 8));
console.assert(maxOfThree(0, 8, 20), 20);
console.assert(maxOfThree(-12, 35, 10), 35);

// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
// write your console.log/asserts here:
console.log('You’re a vowel! ', isVowel('e'));
console.assert(isVowel('a'), true);
console.assert(isVowel('i'), true);
console.assert(isVowel('u'), true);

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(english) {
  var rovarspraket = [];
  english.split('');
  for ( i = 0; i < english.length; i++) {
    if (!(isVowel(english[i]))) { //if the char is not a vowel
      rovarspraket.push(english[i] + 'o' + english[i]);//insert an 'o' and put another char
    } else {
      rovarspraket.push(english[i]);
    }
  }
  return rovarspraket.join('');
}
// write your console.log/asserts here:
console.log(translate('fun'));
console.assert(translate('raboof'), 'foobar');
console.assert(translate('Professor Plum'), 'mulP rosseforP');

// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(theWord) {
  var splitArr = theWord.split('');
  var reverseArr = splitArr.reverse('');
  return reverseArr.join('');
}
// write your console.log/asserts here:
console.log(reverse('the bird'));
console.assert(reverse('palindrome'), 'emordnilap');
console.assert(reverse('anna'), 'anna');

// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
function largest(numbers) {
  return Math.max(...numbers);
}
// write your console.log/asserts here:
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers), 101);

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
function longest(strings) {
  var longestElement = '';
  var elementLength = 0;
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > elementLength) {
      elementLength = strings[i].length;
      longestElement = strings[i];
    }
  }
  return longestElement;
}
// write your console.log/asserts here:
console.log('The longest word in the ’strings’ array is ', longest(strings));

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:
function getEvens(numbers) {
  var evens = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}
// write your console.log/asserts here:
console.log(getEvens(numbers));

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
function getOdds(numbers) {
  var odds = [];

  for (i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }

  return odds;
}
// write your console.log/asserts here:
console.log(getOdds(numbers));

// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
function containsIs(strings) {

  var is = [];

  for ( i = 0; i < strings.length; i++) {

    if (strings[i] === 'is') {
      is.push(strings[i]);
    }
  }
  return is;
}
// write your console.log/asserts here:
console.log(containsIs(strings));

///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:
function contains(substr, strings) {
  var substring = [];
  for ( i = 0; i < strings.length; i++ ) {
    if ( strings[i].search(substr) !== -1 ) {
      substring.push(strings[i]);
    }
  }
  return substring;
}
// write your console.log/asserts here:
console.log(contains('o', strings));

// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:
function teachersOf(teaches, instructors) {
  for ( teaches in instructors ) {
    if 
  }
}
// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
