"use strict";

var mocha = require('mocha');
var expect = require('chai').expect;
var arrayFunc = require(__dirname + '/../arrayFunc');
var unique = require(__dirname + "/../lib/unique");
var frequency = require(__dirname + "/../lib/frequency");


describe('newPush()', function(){
  it('adds a new element to an array at the end and return array', function(){
      var testArray = [1,2,3,4,5];
      var runFunc = arrayFunc.newPush(testArray, 10);

      expect(runFunc).to.be.a('number');
      expect(runFunc).to.eql(6);
  });

});

describe('newPop()', function(){
  it('removes the last element from an array and returns array', function(){
    var testArray = [1,2,3,4,5];
    var runFunc = arrayFunc.newPop(testArray);

    expect(runFunc).to.be.a('number');
    expect(runFunc).to.eql(5);

  });
});

describe('newShift()', function(){
  it('removes the first element from an array and returns that element', function(){
    var testArray = [1,2,3,4,5];
    var runFunc = arrayFunc.newShift(testArray);

    expect(runFunc).to.be.a('number');
    expect(runFunc).to.eql(1);
    expect(testArray.length).to.eql(4);

  });
});

describe('newUnshift()', function(){
  it('removes the first element of an array and returns that element', function(){
    var testArray = [1,2,3,4,5];
    var runFunc = arrayFunc.newUnshift(testArray, 10);

    expect(runFunc).to.be.a('number');
    expect(runFunc).to.eql(6);

  });
});

describe('unique()', function(){
  it('takes an array and removes any duplicate numbers, returns array', function(){
    var testArray = [1,2,2,3,2,4,5];
    var runFunc = unique(testArray);

    expect(runFunc).to.be.an('array');
    expect(runFunc).to.eql([1,3,4,5]);

  });
});

describe('frequency()', function(){
  it('takes an array and returns an array with the most common letter(s)', function(){
    var testArray = ['cat', 'dog', 'log', 'dogs', 'Donkey', 'dapper'];
    var runFunc = frequency(testArray);

    expect(runFunc).to.be.an('array');
    expect(runFunc).to.eql(['d', 'o']);

  })
})
