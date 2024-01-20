

var email = document.querySelector("#email")
var password = document.querySelector("#password")
var submit = document.querySelector(".submit")


var emailGet = localStorage.getItem("email")
var passGet = localStorage.getItem("password")



submit.addEventListener("click",function(load){


    load.preventDefault

    if( email.value==="" || password.value===""){
        alert("Please fill data")
    }
   
    if((emailGet && emailGet.trim()===email.value && passGet && passGet.trim()===password.value)){
        setTimeout (function(){
            window.location="index.html"
        }, 1000)
    }
    else{
        alert("email or password is wrong")
    }
    
    
    







})

















