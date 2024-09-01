const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");

eye1.addEventListener("click", function(){
    if(password.type == "password"){
        password.type = "text";
        eye1.classList.add("fa-eye")
    }
    else{
        password.type = "password";
        eye1.classList.remove("fa-eye")
    }
})

eye2.addEventListener("click", function(){
    if(confirm_password.type == "password"){
        confirm_password.type = "text";
        eye2.classList.add("fa-eye")
    }
    else{
        confirm_password.type = "password";
        eye2.classList.remove("fa-eye")
    }
})

const button = document.getElementById("button");

button.addEventListener("click", function(){
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if(password.length != 0){
        if(password == confirm_password){
            message.textContent = "password match";
            message.style.color = "#008000";
        }
        else{
            message.textContent = "password don't match";
            message.style.color = "#c40000";
        }
    }
    else{
        alert("password can't be empty");
        message.textContent = "";
    }

})

