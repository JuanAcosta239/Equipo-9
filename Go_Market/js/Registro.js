document.getElementById("register-btn").addEventListener("click", function(){

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let message = "";

    //validación de los campos
    if(!password){
    }else if (password.length < 6){
        message = "La contraseña debe contener más de 6 dígitos";
    }else if(password !== confirmPassword){
        message = "Las contraseñas no coinciden";
    }else{
        message = "¡Registro Exitoso, iniciar sesión!";
    }

    //Determinar los mensajes
    switch(message){
        case "La contraseña debe contener más de 6 dígitos":
            document.getElementById("message").textContent = message;
            break;
        case "Las contraseñas no coinciden":
            document.getElementById("message").textContent = message;
            break;
        case "¡Registro Exitoso, iniciar sesión!":
            document.getElementById("message").textContent = message;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.some(user => user.username === username && user.email === email && user.password === password && user.confirmPassword === confirmPassword)){
        alert("Este usuario ya esta registrado");
        return;
    }
    users.push({username,email, password,confirmPassword});
    localStorage.setItem("users", JSON.stringify(users));
    //window.location.href = "Login.html";
});

