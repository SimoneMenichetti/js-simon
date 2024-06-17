// Funzione per generare 5 numeri random da 1 a 100

function generaNumeriCasualiUnivoci(quantita, max) {
    // creazione di un array per contenere i numeri generati 
    const arrayNumeri = [];
    // inizio di un ciclo while per riempire l'array dedicato ad i numeri generati
    while (arrayNumeri.length < quantita) {
        // utilizzo di math.floor per la generazione del numero random
        const numeroCasuale = Math.floor(Math.random() * max) + 1;
        // controllo dei numeri generati ed inserimento del numero solo se nell'array numeri non è gia stato inserito quel numero generato
        if (!arrayNumeri.includes(numeroCasuale)) {
            arrayNumeri.push(numeroCasuale);
        }
    } 
    // utilizzo di return per ritornare il valore di numeri e richiamarlo 
    return numeri;
}


// definite una funzione per la visualizzazione dei 5 numeri generati da 1 a 100
