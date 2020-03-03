// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var vaildPhoneNumber = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	}); 
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});

	it("The value 4-4 should pass", function(){
		assert.isTrue(validInput(4-4))
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	it("Input is required",function(){
		assert.isFalse(vaildPhoneNumber(null))
		assert.isFalse(vaildPhoneNumber())
		assert.isFalse(vaildPhoneNumber(undefined))
	});
	it("Input must be numeric", function(){
		assert.isTrue(vaildPhoneNumber("a"))
	});
	it("Input must be integers");
	it("Input must be 10 numbers");

	it("returns constant pattern", function () {

        expect(myRegExp().toString()).to.equal(/'^[0-9]+$'/i.toString());

    });
	
});



var assert = require('assert');

describe('RegExp Test', function() {
  it('should return a valid RegExp', function() {
    var getSomeRegex = function() {
      return /someregex/;
    };

    var aRegex = getSomeRegex();
    assert.equal(aRegex instanceof RegExp, true);
  });

  it('should return a invalid Regexp', function() {
    var getInvalidRegex = function() {
      return '/something';
    };

    var aInvalidRegex = getInvalidRegex();
    assert.equal(aInvalidRegex instanceof RegExp, false);
  });
});