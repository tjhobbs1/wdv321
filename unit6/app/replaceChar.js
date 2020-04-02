var replaceChar = function replaceChar(inValue) {   
    inValue += "";	//turns all inValues into strings
    let regex = /'/gi;
    let regex1 = /\//gi;
    let regex2 = /</gi;
    let regex3 = />/gi;

if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
    return false;
}else{
    let updatedValue = inValue.replace(regex,"-").replace(regex1,"-").replace(regex2,"-").replace(regex3,"-");
   
    return updatedValue;
}
}

/*Test Plan
Check for empty fields

Empty string should return false
Multiples spaces should return false
Null should return false
Undefined should return false

Replace Char

Ty’s should equal Ty-s
‘ Should equal -
/ Should equal -
< Should equal -
>Should equal -
‘ <>Should equal -
<>/ Should equal —
It’s <h1> is a / should equal It-s -h1- is a -

*/