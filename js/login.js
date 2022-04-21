function validate()
{
    var username=document.getElementById("username").value;
    var password= document.getElementById("password").value;
   
    if(username=="rickroll007"&& password=="1234")
    {
       
        return false;
        
    }
    else{
        document.getElementById('login').disabled = true;
        error="Invalid Username or Password. Please try again!";
        document.getElementById("form-meserror").innerHTML=error;
        setTimeout("location.reload(true);",1000);
    }
    
}

