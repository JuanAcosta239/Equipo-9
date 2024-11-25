document.getElementById("login-btn").addEventListener("click", function(){

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user){
        localStorage.setItem("loggedinUser", email);
    }else{
        alert("Correo electrónico o contraseña incorrecta");
    }

});