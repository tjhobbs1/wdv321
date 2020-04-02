var validEmail = function(inValue){
    inValue += "";	//turns all inValues into strings
	var match1 = inValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

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


/*Test Plan
Check for empty fields

Empty string should return false
Multiples spaces should return false
Null should return false
Undefined should return false

Check Email Address

tjhobbs1@gmail.edu should return true
bob@aol.com should return true
Pete@dmacc.edu should return true
bob@usda.gov should return true
bob@aol.biz should return true
jim@gmail.thisisatest should return true
Ty should return false
ty@ should return false
ty@gmail. Should return false
@gmail.com should return false
Gmail should return false

*/