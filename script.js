// script.js - Gestisce il login e la protezione delle pagine

// Simulazione di credenziali valide
const CREDENTIALS = { username: "admin", password: "password" };

// Funzione di login
function login(event) {
    event.preventDefault(); // Impedisce il refresh della pagina
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
        localStorage.setItem("loggedIn", "true"); // Salva lo stato di login
        window.location.href = "index.html"; // Reindirizza alla pagina principale
    } else {
        errorMessage.style.display = "block"; // Mostra messaggio di errore
    }
}

// Protezione delle pagine - Reindirizza a login se non autenticato
if (window.location.pathname !== "/login.html" && !localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
}