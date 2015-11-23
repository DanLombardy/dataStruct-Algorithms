module.exports = exports = function (array){
  var numCntr = {};
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(numCntr[array[i]])
      numCntr[array[i]]++;
    else
      numCntr[array[i]] = 1;
  }

  var propCount = 0;
  for (var k in numCntr) {
      if (numCntr.hasOwnProperty(k)) {
         ++propCount;
      }
  }

  var e = 0;
  for(var key in numCntr){
    if(numCntr[key] == 1){
      newArray[e] = Number(key);
      e++;
    }
  }
  array = newArray;

  return array;
 }
