// JavaScript Document

var validatePhoneNumber = function(inValue){
	inValue += "";	//turns all inValues into strings
	var reg = new RegExp('^[0-9]+$');
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
		return false;
	}
	return true;
	if(reg.test(inValue)){
		return True
	}return False

}



module.exports = validatePhoneNumber;