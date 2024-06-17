// Visualizzare in pagina 5 numeri casuali.
const numeriVisualizzati= visualizzatoreNumeri();



// interazione utente inserimento dei 5 numeri visti precedentemente in pagina uno alla volta

   // Aggiungi un listener per il click del pulsante Invia
document.getElementById('inviaButton').addEventListener('click', verificaNumeri);

// Dopo che sono stati inseriti i 5 numeri dall'utente, il software dichiara quanti e quali dei numeri da indovinare sono stati individuati.
