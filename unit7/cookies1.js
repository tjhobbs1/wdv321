function addCookie(tag, value) {
    var expireDate = new Date()
    var expireString = ""
    expireDate.setTime(expireDate.getTime() + (1000 * 60 * 60 * 24 * 3) )
    expireString = "expires="+ expireDate.toGMTString()
    document.cookie = tag + "=" + escape(value) + ";" + expireString + ";"
  }//end addCookie


  function checkCookie() { 
    let pageviewed = document.referrer;
    sessionStorage['pageviewed'] = pageviewed;
    var readValue = sessionStorage['pageviewed'];
    addCookie("PriorPage",readValue)

    var user=getCookie("UserName");
    if (user != null) {
      let numOfVisits = getCookie("Visited");
      numOfVisits++;
      addCookie("Visited",numOfVisits)
      document.querySelector('#name').innerHTML="Welcome: " + user;
      document.querySelector('#welcome').innerHTML="You came from: " + readValue + " and you have been here: " + numOfVisits + " times";
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         addCookie("UserName", user);
         addCookie("Visited",0);
         location.reload();
       }
    }
  }

  function checkForSecureCookie(){
    if (getCookie("UserName")== "Secure Cookie"){
        checkCookie()
    }else{
      history.back();
    }
  }

  function secureCookie(){
    tag = "UserName";
    value = "Secure Cookie";
    var expireDate = new Date()
    var expireString = ""
    expireDate.setTime(expireDate.getTime() + (1000 * 60 * 60 * 24 * 180) )
    expireString = "expires="+ expireDate.toGMTString()
    document.cookie = tag + "=" + escape(value) + ";" + expireString + ";"
  }

  function getCookie(tag) {
    var value = null
    var myCookie = document.cookie + ";"
    var findTag = tag + "="
    var endPos
    if (myCookie.length > 0 ) {
      var beginPos = myCookie.indexOf(findTag)
      if (beginPos != -1) {
        beginPos = beginPos + findTag.length
        endPos = myCookie.indexOf(";", beginPos)
        if (endPos == -1)
          endPos = myCookie.length
        value = unescape(myCookie.substring(beginPos, endPos))
      }
    } 
   return value   
  } 


  function deleteCookie(){
    document.cookie = "UserName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; PriorPage=;";
    document.querySelector('#name').innerHTML="Cookie DELETED";
    
    
}

function deleteCookieAboutPage(){
  document.cookie = "UserName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; PriorPage=;";
  document.querySelector('#name').innerHTML="Cookie DELETED";
  location.reload();
  
  
}

  function getUserName() {

    //get username from prompt window
    var strName = window.prompt("Hello, What is your name?", "");

    //create cookie element named 'UserName' with a value stored in strName
    addCookie("UserName",strName);

  }

  function displayNumOfViews(){
     let visits =  getCookie("Visited");
     document.querySelector('#numVisits').innerHTML="You have visited this page " + visits;
  }
  function displayUserName () {

    //display the UserName element of the cookie
    alert("The UserName is: " + getCookie("UserName") )

  }

  function displayPriorPage () {

    //display the UserName element of the cookie
    alert("The Prior Page is: " + getCookie("PriorPage") )

  }




