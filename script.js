let form=document.getElementById("form");
let username=document.getElementById("username");
let comment=document.getElementById("commentaire");
let password=document.getElementById("pass");
let email=document.getElementById("mail")

var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
form.addEventListener('submit',(e)=>{
  e.preventDefault();
    Empty(password,username,comment);
    vpassword(password);
    vemail(email);
  })

 function vpassword(){
   
    if(password.value.length<8){      
    alert("Minimum of 8 characters !!!"); 
    return false;   
    }
    else if(!re.test(password.value)){    
    alert('Please write a correct Password')    
       
    return false;
  }
}

function Empty(password,username,comment)
{
if(username.value==""){
alert("Username case was empty");}
else if(password.value==""){
alert(" Password case was empty");}
else if(comment.value==""){
alert("comment case was empty");
}
}
function vemail(email) 
{
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("invalid email address!")
    return (false)
}
