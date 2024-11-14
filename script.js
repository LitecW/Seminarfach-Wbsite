function toggleForm(formType) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (formType === 'login') {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else if (formType === 'register') {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        // Speichern der Daten im localStorage
        if (localStorage.getItem(username)) {
            alert("Benutzername bereits vergeben!");
        } else {
            localStorage.setItem(username, password);
            alert("Registrierung erfolgreich! Du kannst dich jetzt anmelden.");
            toggleForm('login'); // Zurück zum Login-Formular
        }
    } else {
        alert("Bitte Benutzername und Passwort eingeben.");
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Überprüfen der Anmeldedaten
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Erfolgreich eingeloggt!");
        // Hier könntest du den Login-Status speichern oder weiterleiten
    } else {
        alert("Falscher Benutzername oder Passwort!");
    }
}
