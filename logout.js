// logout.js - Gestisce il logout dell'utente

// Funzione per effettuare il logout
function logout() {
    localStorage.removeItem("loggedIn"); // Rimuove lo stato di login
    window.location.href = "login.html"; // Reindirizza alla pagina di login
}