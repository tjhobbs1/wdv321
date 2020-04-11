function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    cookiepath = "/"; 
    prevPage = document.referrer;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + cookiepath + ";PrevPage=" + prevPage;
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
      alert("You are here")
    var user=getCookie("username");
    if (user != "") {
      document.querySelector('#name').innerHTML="You have a cookie Named: " + user;
      
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 3);
         location.reload();
       }
    }
  }
  
  function deleteCookie(){
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.querySelector('#name').innerHTML="Cookie DELETED";
      
      
  }
  
  function displayCookie() {
      alert("Contents of Cookie: " + document.cookie)
    }

function VisitCounter(){

    var visits = GetCookie("counter");
    
    if (!visits) { visits = 1;
    
    document.write("By the way, this is your first time here.");
    
    }
    
    else {
    
    visits = parseInt(visits) + 1;
    
    document.write("I note, you have been here " + visits + " times.");}
    
    setCookie("counter", visits,expdate);}