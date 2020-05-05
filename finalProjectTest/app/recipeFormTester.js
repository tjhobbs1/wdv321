var checkRecipeName = function(inValue){
    inValue += "";	//turns all inValues into strings

    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        return true;
    }
}


var checkServing = function(inValue){
    if(!checkIfNum(inValue)){
        return false;
    }
    else{
        return true;
    }
}

var checkPrepTime = function(inValue){
    if(!checkIfNum(inValue)){
        return false;
    }
    else{
        return true;
    }
}

var checkPrepTimeValue = function(inValue){
    inValue += "";	//turns all inValues into strings
    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        return true;
    }
}

var checkAmount = function(inValue){
    if(!checkIfNum(inValue)){
        return false;
    }
    else{
        return true;
    }
}

var checkIngredUnitDropdown= function(inValue){
    inValue += "";	//turns all inValues into strings
    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        return true;
    }
}

var checkIngredient= function(inValue){
    inValue += "";	//turns all inValues into strings
    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        return true;
    }
}




function checkIfNum(value){
    value += "";	//turns all inValues into strings
    var regexNum = new RegExp('[A-Za-z]');

    if((value == '')||(value == null)||(value== 'undefined')){
        return false;
    }
    else if(regexNum.test(value) == true){
        return false;
    }
    else if(value.charAt(0)=='-'){
        return false;
    }else{
        var regOnlyNum = new RegExp('-?\\b\\d+(?:\\.\\d+)?(?:/\\d+(?:\\.\\d+)?)?\\b');
        return regOnlyNum.test(value);
    }
}

var checkStep= function(inValue){
    inValue += "";	//turns all inValues into strings
    if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
        return false;
    }else{
        return true;
    }
}