

var username = document.querySelector("#username");
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var submit = document.querySelector(".submit")







submit.addEventListener("click",function(load){

load.preventDefault

if(username.value==="" || email.value==="" || password.value===""){
    alert("Please fill data")
}

else{

    localStorage.setItem("username",username.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)

    setTimeout ( () => {
                    window.location = "login.html"
                } , 1000)
}

})




















