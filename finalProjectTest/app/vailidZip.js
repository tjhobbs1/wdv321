var validZip = function(inValue){
    inValue += "";	//turns all inValues into strings
	var match1 = inValue.match(/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/);

    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        if (match1) {
        return true;
    }else{
        return false;
    }
    }

	

}

/*Check for empty fields

Empty string should return false
Multiples spaces should return false
Null should return false
Undefined should return false

Check Zip Code
50023 Should return true 
50023-1234 should return true
5 should return false
50 should return false
500 should return false
5002 should return false
50023- should return false
50023-1 should return false
50023-12 should return false
50023-123should return false
50023-1aaa should return false
A0023-1aaa should return false
50023-aaaa should return false
abcd-aaaa should return false


*/