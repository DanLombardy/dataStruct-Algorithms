"use strict";

function newPush (array, element1){
      var arrayNum = array.length -1;
      for(var i = 1; i <arguments.length; i++ ){
        array[arrayNum + i] = arguments[i];
      }
  return array.length;
}


function newPop(array){
  var lastElem = array[array.length - 1];
  array.length = array.length - 1;
  return lastElem;
}

function newShift(array){
  var arrLength = array.length;
  var replaceArray = array;
  var firstElem = array[0];
  for (var i = 0; i < arrLength; i++){
   array[i] = replaceArray[i +1];
  }
  array.length = array.length -1;
  return firstElem;
}

function newUnshift(array, element1){
  var argArray = [];
    var argLength = arguments.length -1 ;
  for(var i = 0; i < argLength; i++ ){
    argArray[i] = arguments[i + 1];
  }
  for(var i = 0; i < array.length; i++){
    argArray[i + argLength] = array[i];
  }
  array = argArray;

  return array.length;
}

module.exports.newPush = newPush;
module.exports.newPop = newPop;
module.exports.newShift = newShift;
module.exports.newUnshift = newUnshift;
