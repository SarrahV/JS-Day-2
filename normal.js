// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.



// 1.
// Should always return the value 5

function giveMeFive() {

}

//My Answer

function giveMeFive() {
  return 5;
}


//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)

function noOp() {

}

//My Answer

function noOp(value) {
  return value;
}

//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.

function double() {

}

//My Answer

function double(myNum) {
  return myNum * 2;
}

//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.

function square() {

}

//My Answer

function square(myNum) {
  return myNum * myNum;
}

//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.

myArray = [1,2,3,4,5];
           0 1 2 3 4

0
1
2
3
4

myArray[0]
myArray[1]

myArray[index]

[1,2,3,4,5][]

// myArray = ["a","b","c","d"];
// for (index = 0; index < myArray.length; index++) {
//   console.log("array: "+myArray);
//   console.log("index: "+index);
//   console.log("value: "+myArray[index]);
//   console.log("--------------");
// }

function sum(myArray) {
  var theanswer;
  theanswer = 0;
  var index;
  for (index = 0; index < myArray.length; index++) {
    var numberAtIndex = myArray[index];
    theanswer += numberAtIndex;
  }
  return theanswer;
}

//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop

/* Steps? 
  Create array with alphabet.
  Get index of each letter starting from 0.
  Compare letterIndex letter to index of corresponding letter in arr 
  Must add 1 to get correct index


  

*/

function letterIndex(letter) {
  var arr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
  var index;
  for (index = 0; index < arr.length; index++) {

  }

}

//---------

// 7.
// This function should accept 1 parameter; a number.
// It should return the letter that corresponds with
// that number. For example, 1 would be "a" and 26
// would be "z". This is the inverse of the previous
// function.

// Note: this needs to work for numbers larger than 26.
// For example 27 should loop back around to "a".

// HINT: use an array and the modulo (%) operator


function reverseLetterIndex(myLetter) {
  var alph, letter;
  var alph = "abcdefghijklmnopqrstuvwxyz".split("");
  
  letter = alph[myLetter % alph.length];
    
  return letter;
}

//---------

// 8.
// This function should accept 1 parameter; a string.
// It should shift every letter in the string by 13
// places. This is a form of Caesar cipher known as
// ROT-13. If you are unsure of exactly what you are
// supposed to do read the wikipedia article that explains
// it quite well: http://en.wikipedia.org/wiki/ROT13

// HINT: use the previous 2 functions

function rot13(sentence) {
  var finalSentence;

  function stepOne(letter) {
    var index = letterIndex(letter);//this comes from the function above
    var shiftInd = index +13;
    var shiftLet = reverseLetterIndex(shiftInd); //this comes from the function above that indexed the letters to numbers
    return shiftLet;

  }

  function stepTwo(word) {
    var letters = word.split("");
    var processedLetters = [];
    var stepOne;//this comes from the function above
    var letter;

  for(var index = 0; index <letters.length; index++) {  //loops over and indexes letter
    letter = letters[index]; //sets var letter to 0
    processedLetter = stepOne(letter); //assigns function above and pases var letter through it
    processedLetter.push(stepOne); 
  }
  
  var processedWord = processedLetter.join("");
  return processedWord;
}

  var words = sentence.split(""); 
  var word, cipheredWord, finishedWords = [];
  
  for(var index = 0; index <words.length; index++) {  //loops over and indexes letter
    word = words[index]; //sets var letter to 0
    cipheredWord = processedWord(Word); //assigns function above and pases var letter through it
    finishedWords.push(cipheredWord);
  }

  finalSentence = finishedWords.join(" ");

  return finalSentence;
}
