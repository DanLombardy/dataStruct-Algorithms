"use strict";
/*
mplement some of the whiteboard problems in the data structures arrays - dictionaries- big oh- slides.

* These can be found under the Files section of Canvas

Specifically:

re-implement: Push, Pop, Shift, and Unshift for Array.prototype, without using any library functions. Also add some Mocha tests to verify correctness.
unique: implement a function called unique. It takes an array and returns a copy of the array with all the duplicates removed.
frequency2: given an array of english words, figure out what the most common letter (anywhere in a word) is.

*/

var arrayFunctions = {

}

function newPush (array, element1){
      var arrayNum = array.length
      var newArray = array;
      for(var i = 0; i <arguments.length - 1; i++ ){
        newArray[arrayNum + i] = arguments[1 + i];
      }
  return newArray;
}

function newPop(array){
  var newArray = [];
  var arrLength = array.length - 1;
  for(var i = 0; i <  arrLength; i++ ){
    newArray[i] = array[i];
  }
return newArray;
}

function newShift(array){
  var newArray = [];
  var arrLength = array.length;
  for (var i = 0; i < arrLength - 1; i++){
    newArray[i] = array[i +1];
  }
  return newArray.length;
}

function newUnshift(array, element1){
  var argArray = [];
  for(var i = 1; i < arguments.length; i++ ){
    argArray[i -1] = arguments[i];
  }
  var newArray = argArray.concat(array);

  return newArray.length;
}

function unique(array){

  for(var i = 0; i < array.length; i++){
    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i]) )
    {
      array.splice(array.lastIndexOf(array[i]), 1);
    }

  }
  return array;
}

module.exports.newPush = newPush;
module.exports.newPop = newPop;
module.exports.newShift = newShift;
module.exports.newUnshift = newUnshift;
module.exports.unique = unique;
