// JavaScript Document

//var assert = require('chai').assert;	//Chai assertion library
// var validInput = require('../app/validateRequiredField');
// var vaildPhoneNumber = require('../app/validatePhoneNumber');
//var expect = require('chai').expect;
var assert =chai.assert;

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
		assert.isTrue(vaildPhoneNumber(1234567890))
		assert.isTrue(vaildPhoneNumber("123-456-7890"))
		assert.isFalse(vaildPhoneNumber("1234A7B890"))
		assert.isFalse(vaildPhoneNumber("A234A7B890"))
		assert.isFalse(vaildPhoneNumber("1234A7B89B"))
		assert.isFalse(vaildPhoneNumber("AAABBBRRRR"))
	});
	it("Input must be integers",function(){
		assert.isFalse(vaildPhoneNumber("1A1456445"))
		assert.isFalse(vaildPhoneNumber("1A14GGG6445"))
		assert.isTrue(vaildPhoneNumber("3195551234"))
	});
	it("Input must be 10 numbers", function(){
		assert.isTrue(vaildPhoneNumber("1234567890"))
		assert.isFalse(vaildPhoneNumber("1213"))
		assert.isFalse(vaildPhoneNumber("1"))
		assert.isFalse(vaildPhoneNumber("12"))
		assert.isFalse(vaildPhoneNumber("123"))
		assert.isFalse(vaildPhoneNumber("1234"))
		assert.isFalse(vaildPhoneNumber("12345"))
		assert.isFalse(vaildPhoneNumber("123456"))
		assert.isFalse(vaildPhoneNumber("1234567"))
		assert.isFalse(vaildPhoneNumber("12345678"))
		assert.isFalse(vaildPhoneNumber("123456789"))
		assert.isFalse(vaildPhoneNumber("12345678900"))
		assert.isFalse(vaildPhoneNumber("123456789000"))
		assert.isFalse(vaildPhoneNumber("1234567890000"))
	});

	it("returns constant pattern", function () {
		assert.isFalse(vaildPhoneNumber("12"))
		assert.isFalse(vaildPhoneNumber("12-146464"))
		assert.isFalse(vaildPhoneNumber("12-123-45656"))
		assert.isTrue(vaildPhoneNumber("1234567894"))
		assert.isTrue(vaildPhoneNumber("123-456-7894"))
		

    });
	
});



