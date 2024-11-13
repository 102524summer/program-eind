let storedUsername = "";
let storedPassword = "";

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!storedUsername && !storedPassword) {
        if (username && password) {
            storedUsername = username;
            storedPassword = password;
            alert("Inloggen geslaagd!");
            window.location.href = "merch.html";
        } else {
            alert("Vul zowel een gebruikersnaam als een wachtwoord in.");
        }
    } else {
        if (username === storedUsername && password === storedPassword) {
            alert("Inloggen geslaagd!");
            window.location.href = "merch.html";
        } else {
            document.getElementById("errorMessage").classList.remove("hidden");
        }
    }
}
