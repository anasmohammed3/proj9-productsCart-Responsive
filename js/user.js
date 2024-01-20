
var userInfo = document.querySelector ("#user_info")
var userD = document.querySelector (".user")
var links = document.querySelector (".links")
var namsje = document.querySelector(".name2")
var divName1 = document.querySelector(".name1")
var ex = document.querySelector(".ex")


if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "flex"
}

userD.addEventListener("click", function(){
    divName1.style.display = (divName1.style.display === 'block') ? 'none' : 'block';
    namsje.innerHTML = localStorage.getItem("username")

})





var logButton = document.querySelector("#logout")

logButton.addEventListener("click", function(){

    localStorage.clear()

    setTimeout(function(){

        window.location= "regiester.html"

    },1000)

});












