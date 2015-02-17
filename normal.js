// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.



// 1.
// Should always return the value 5

function giveMeFive() {
  return 5;

}

//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)

function noOp(value) {
  return value;
}

//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.

function double(value) {
  return value * 2;
}

//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.

function square(value) {
  return value * value;
}

//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.

function sum(myArray) {
    var theAnswer;
    theAnswer = 0;//just to clear out any possible variable
    var index;
    for (index = 0; index < myArray.length; index++) {
      var numberAtIndex = myArray[index];
      theAnswer += numberAtIndex;
    }
    return theAnswer;
}

//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop

function letterIndex(myLetter) {
  var alph, lowerCase, index;
  var alph = { 
            "a" :0,
            "b" :1,
            "c" :2,
            "d" :3,
            "e" :4,
            "f" :5,
            "g" :6,
            "h" :7,
            "i" :8,
            "j" :9,
            "k" :10,
            "l" :11,
            "m" :12,
            "n" :13,
            "o" :14,
            "p" :15,
            "q" :16,
            "r" :17,
            "s" :18,
            "t" :19,
            "u" :20,
            "v" :21,
            "w" :22,
            "x" :23,
            "y" :24,
            "z" :25
};
    lowerCase = myLetter.toLowerCase();
    index = alph[lowerCase];
  
    return index; 
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
  var cipheredCode;

  function codeLetter(letter) {
    var index = letterIndex(letter);//this comes from the function above
    var indexShifted = index + 13;
    var letterShifted = reverseLetterIndex(indexShifted); //this comes from the function above that indexed the letters to numbers
    return letterShifted;
  }

  function codeWord(word) {
    var letters = word.split("");
    var combinedLetters = [];
    var processedLetter, letter;

  for(var index = 0; index < letters.length; index++) {  //loops over and indexes letter
    letter = letters[index]; //sets var letter to 0
    processedLetter = codeLetter(letter); //assigns function above and pases var letter through it
    combinedLetters.push(processedLetter); 
  }
  
  var processedWord = combinedLetters.join("");
  return processedWord;
}

  var words = sentence.split(" "); 
  var word, cipheredWord, finishedWords = [];
  
  for(var index = 0; index < words.length; index++) {  //loops over and indexes letter
    word = words[index]; //sets var letter to 0
    cipheredWord = codeWord(word); //assigns function above and pases var letter through it
    finishedWords.push(cipheredWord);
  }

  cipheredCode = finishedWords.join(" ");

  return cipheredCode;
}
