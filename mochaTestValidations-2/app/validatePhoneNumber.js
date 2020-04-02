// JavaScript Document

var validatePhoneNumber = function(inValue){
	var match = inValue.match(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);

    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        if (match) {
        return true;
    }else{
        return false;
    }
    }

	

}



module.exports = validatePhoneNumber;