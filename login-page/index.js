const username = "anchal";
const password = "123";

const loginbtn = document.getElementsByClassName("login-btn")[0];
const inputUserName = document.getElementById("user-name");
const inputPassWord = document.getElementById("pass-word");

loginbtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the button click event

    // Reset border color and placeholder color to default
    inputUserName.style.borderColor = "";
    inputPassWord.style.borderColor = "";
    inputUserName.classList.remove("error");
    inputPassWord.classList.remove("error");

    if (!inputUserName.value) {
        inputUserName.focus();
        inputUserName.setAttribute("placeholder", "Username cannot be empty");
        inputUserName.classList.add('error');
        inputUserName.style.borderColor = "red";
    } 
    else if (!inputPassWord.value) {
        inputPassWord.focus();
        inputPassWord.setAttribute("placeholder", "Password cannot be empty");
        inputPassWord.classList.add('error');
        inputPassWord.style.borderColor = "red";
    }
    else if (username !== inputUserName.value) {
        inputUserName.value = "";
        inputUserName.style.borderColor = "red";

    } else if (username === inputUserName.value && password !== inputPassWord.value) {
        inputPassWord.value = "";
        inputPassWord.style.borderColor = "red";
    } 
    else {
        // Successful login
        alert("Login successful!");
        inputUserName.style.borderColor = "green";
        inputPassWord.style.borderColor = "green";
    }
});
