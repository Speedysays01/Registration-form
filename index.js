let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");
let number=document.getElementById("number");

function validateInput()
{
    var returnval=true;
    //USERNAME
    //check username is empty 
    if(userName.value.trim()==="")
    {
       onError(userName,"User Name cannot be empty");
       returnval=false
    }
    else
    {
        onSuccess(userName);
    }
    

    //PHONE NUMBER
    //Not empty
    if(number.value.trim()==="")
    {
        onError(number,"Phone number cannot be empty");
        returnval=false;
    }

    //checks length
    else if(number.value.length != 10)
    {
        onError(number , "Enter a valid number");
        returnval=false;
    }
    
    else
    {
         onSuccess(number);
    }
  

    //Email
    if(email.value.trim()==="")
    {
        onError(email,"Email cannot be empty");
        returnval=false;
    }
    else
    {
        //Checks if valid
        if(!isValidEmail(email.value.trim()))
        {
            onError(email,"Email is not valid");
            returnval=false;
        }
        else
        {
            onSuccess(email);
        }
    }



    //password
    if(pwd.value.trim()==="")
    {
        onError(pwd,"User Name cannot be empty");
        returnval=false;
     }
     else if(pwd.valuelength < 4)
     {
        onError(pwd , "Password should be at least 4 characters");
        returnval=false;
     }
     else
     {
         onSuccess(pwd);
     }


    //confirm password
     if(conPwd.value.trim()==="")
     {
        onError(conPwd,"User Name cannot be empty");
        returnval=false;
     }
     else
     {
         if(pwd.value.trim()!==conPwd.value.trim())
         {
            onError(conPwd,"Password & Confirm password not matching");
            returnval=false;
         }
         else
         onSuccess(conPwd);
     }

     return returnval;
  
}



document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input)
{
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
} 

function onError(input,message)
{
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



document.getElementById('regbtn').addEventListener('click', function() {
    if (validateInput()) {
        // If the form is valid, refresh the page
        location.reload();
        alert("Registration successfull! Enter another response");
    } else {
        // If the form is invalid, errors will be shown
        // The page will not refresh
    }
});







