// JavaScript Document

var vaildPhoneNumber = function(inValue){
    inValue += "";	//turns all inValues into strings
	var match1 = inValue.match(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);

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



//module.exports = vaildPhoneNumber;