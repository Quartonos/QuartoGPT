var messages = document.getElementById("messages");
var input = document.getElementById("input");
var sendButton = document.getElementById("send");

sendButton.addEventListener("click", function() {
    var userMessage = input.value;
    input.value = "";

    // Aggiungi il messaggio dell'utente alla finestra di chat
    var userDiv = document.createElement("div");
    userDiv.className = "message message-user";
    userDiv.innerHTML = userMessage;
    messages.appendChild(userDiv);

    // Esegui la logica del chatbot e aggiungi la risposta alla finestra di chat
    var botMessage = getBotResponse(userMessage);
    var botDiv = document.createElement("div");
    botDiv.className = "message message-bot";
    botDiv.innerHTML = botMessage;
    messages.appendChild(botDiv);

    // Scrolla fino in fondo alla finestra di chat per mostrare il nuovo messaggio
    messages.scrollTop = messages.scrollHeight;
});

function getBotResponse(message) {
    // Qui puoi implementare la logica del chatbot
    // Per questo esempio, il chatbot restituirà una risposta casuale tra un elenco predefinito di risposte
    var responses = [
        "Ciao, come stai?",
        "Sono un QuartoBot, un chatbot creato da Quartonos",
        "Posso aiutarti con qualcosa in particolare?",
        "Mi piace parlare con le persone. E tu?",
        "Stai cercando qualcosa in particolare?"
    ];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
