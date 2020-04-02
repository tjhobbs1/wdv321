//// JavaScript Document
var assert =chai.assert;
var validInput = function(inValue){
	inValue += "";	//turns all inValues into strings
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
		return false;
	}
	return true;
}

//module.exports = validInput;


/*
Test Plan For Testing Input
The letter 'a' should pass
The number 4 should pass
Empty or '' should fail
A single space should fail
Two or more spaces should fail
The word null should fail
The word undefined should fail
The value 'a 4' should pass
The value 4-4 should pass


Testing validPhoneNumber

Input is required
	Null should return False
	Empty should return False
	Undefined should return False
Input Must be Numeric
	123-456-7890 should return true
	1234A7B890 shoud return false
	A234A7B890 should return false
	1234A7B89B should return false
	AAABBBRRRR should return false

Input must be integers
	1A1456445 should return false
	1A14GGG6445 should return false
	3195551234 should return true
Input must be 10 numbers
	1234567890 should return true
	1213 should return false
	1 should return false
	12 should return false
	123 should return false
	1234 should return false
	12345 should return false
	123456 should return false
	1234567 should return false
	12345678 should return false
	123456789 should return false
	12345678900 should return false
	123456789000 should return false
	1234567890000 should return false
Returns constant pattern
	12 should return false
	12-146464 should return false
	12-123-45656 should return false
	1234567894 should return true
	123-456-7894 should return true




*/
