"use strict";

var mocha = require('mocha');
var expect = require('chai').expect;
var arrayFunc = require(__dirname + '/../arrayFunc');


describe('a function that mimics push', function(){
  it('adds a new element to an array at the end', function(){
      var testArray = [1,2,3,4,5];

      expect(arrayFunc.newPush(testArray, 10)).to.be.an('array');
      expect(arrayFunc.newPush(testArray, 10)).to.equal([1,2,3,4,5]);
  });

});

describe('a function that mimics array.pop()', function(){
  it('removes the first element from an array', function(){
    var testArray = [1,2,3,4,5];

    expect(arrayFunc.newPop(testArray)).to.be.an('array');
    expect(arrayFunc.newPop(testArray)).to.eql([1,2,3,4]);

  });
});

describe('a function that removes the first index from an array and returns an array', function(){
  it('adds a an argument to the front of an array', function(){
    var testArray = [1,2,3,4,5];

    expect(arrayFunc.newShift(testArray)).to.be.a('number');
    expect(arrayFunc.newShift(testArray)).to.equal(4);

  });
});

describe('a function that adds an argument to the first index of an array and returns a length', function(){
  it('removes the last element from an array', function(){
    var testArray = [1,2,3,4,5];

    expect(arrayFunc.newUnshift(testArray, 10)).to.be.a('number');
    expect(arrayFunc.newUnshift(testArray, 10)).to.equal([10,1,2,3,4,5]);

  });
});

describe('function removes any duplicate indexes in an array', function(){
  it('removes the last element from an array', function(){
    var testArray = [1,2,3,2,4,5];

    expect(arrayFunc.unique(testArray)).to.be.a('array');
    expect(arrayFunc.unique(testArray)).to.equal([1,2,3,4,5]);

  });
});
