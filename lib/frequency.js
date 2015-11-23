

/*if there is more than one letter with the most
instances, the array returned includes all the letters
For example, if there are 3 d's and 3 f's it will return
an array of ['d', 'f']. If there is just one letter with
the most instances it will return only that letter
in the array.
*/

module.exports = exports = function (arry){

  for(var i = 0; i <arry.length; i++){
    arry[i] = arry[i].toLowerCase();
  }

  var letterCntr = {};
  var newArray = [];
  for(var i = 0; i <arry.length; i++){
    for(var j = 0; j < arry[i].length; j++){
      if(letterCntr[arry[i][j]]){
        letterCntr[arry[i][j]]++
      }else{
        letterCntr[arry[i][j]] = 1;
      }
    }
  }

  var highCount = [1, 0];
  for(var key in letterCntr){
    for(var key2 in letterCntr){
      if (letterCntr[key] > letterCntr[key2] && letterCntr[key] > highCount[1]){
        highCount[0] = key;
        highCount[1] = letterCntr[key];
      }
    }
  }

  newArray[0] = highCount[0];

  for (var key in letterCntr){
    if(letterCntr[key] === highCount[1] && key != highCount[0] ){
      newArray.push(key);
    }
  }

  return newArray;

}
