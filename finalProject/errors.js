submitBTN = document.getElementById('submitBTN');


//Check for errors of Recipe name field.
function checkRecipeName(value){
    if(value){
        getErrorSpan('nameError').innerHTML="";
        submitBTN.disabled = false;
    }else{
        getErrorSpan('nameError').innerHTML="Enter A Value" + "<br>";
        submitBTN.disabled = true;
    }
}

//Check for errors with servings
function checkServing(value){
    if(!checkIfNum(value)){
        getErrorSpan('servingError').innerHTML="You must enter a Number." + "<br>";
        submitBTN.disabled = true;
    }
    else{
        getErrorSpan('servingError').innerHTML="";
        submitBTN.disabled = false;

    }
}

function checkPrepTime(value){
    if(!checkIfNum(value)){
        getErrorSpan('prepTimeError').innerHTML="You must enter a Number." + "<br>";
        submitBTN.disabled = true;
    }
    else{
        getErrorSpan('prepTimeError').innerHTML="";
        submitBTN.disabled = false;

    }
}

// A Function to check that time input dropdown has been selected after error
function checkPrepTimeInput(value){
    if(value){
        getErrorSpan('prepTimeValueError').innerHTML="";
    }else{
        getErrorSpan('prepTimeValueError').innerHTML="Please Select A Value From Menu Above.";
    }
}

//Function to check that a Prep Time Value has been selected upon submit. 
function checkPrepTimeValue(value){
    if(value){
        getErrorSpan('prepTimeValueError').innerHTML="";
        return true;
    }else{
        getErrorSpan('prepTimeValueError').innerHTML="Please Select A Value From Menu Above." + "<br>";
        return false;
    }
}

//Function to check that an amount has been selected on submit.
function checkAmount(value){
    if(!checkIfNum(value)){
        getErrorSpan('amountError').innerHTML="You must enter a Positive Number." + "<br>";
        submitBTN.disabled = true;
        return false;
    }
    else{
        getErrorSpan('amountError').innerHTML="";
        submitBTN.disabled = false;
        return true;
    }
}

function checkIngredient(value){
    if(value){
        getErrorSpan('ingredError').innerHTML="";
        submitBTN.disabled = false;
        return true;
    }else{
        getErrorSpan('ingredError').innerHTML="Enter A Value" + "<br>";
        submitBTN.disabled = true;
        return false;
    }
}

function checkIngredDropDown(value){
    if(value){
        getErrorSpan('dropDownError').innerHTML="";
        submitBTN.disabled = false;
        return true;
    }else{
        getErrorSpan('dropDownError').innerHTML="Select A Value" + "<br>";
        submitBTN.disabled = true;
        return false;
    }

}

function checkStep(value){
    if(value){
        getErrorSpan('stepError').innerHTML="";
        submitBTN.disabled = false;
        return true;
    }else{
        getErrorSpan('stepError').innerHTML="You Must Enter A Value" + "<br>";
        submitBTN.disabled = true;
        return false;
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

function getErrorSpan(spanName){
    return document.getElementById(spanName)
}



