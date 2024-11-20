document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username').value; 
    var password = document.getElementById('password').value; 
    
    if (username === 'mel' && password === '123') {
        var url= "admin.html?usuario=" + username;
        window.location.href = url;
    } else {
        alert("Usuario o Contraseña Incorrectos");
    }
});

