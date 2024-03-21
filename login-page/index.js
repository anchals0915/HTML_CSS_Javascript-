const username = "anchal" ; 
const password = "123" ; 

const loginbtn = document.getElementsByClassName("login-btn") ;

const inputUserName = document.getElementById("user-name") ; 
const inputPassWord = document.getElementById("pass-word") ; 

loginbtn.addEventListener("click" , function(e) {

    if(username === inputUserName.value && password === inputPassWord.value ) {
        //direct to page 
        // saying login sucessfull 

    } else if (username === inputUserName.value) {
        // show error in the user box 
    }
    else if(password === inputPassWord.value) {
        // show error in the password box 

    } else {    
        
        // show error in both 
        alert("Login failed .....") ; 
        // and a notification that it failed 

    }


}) ; 