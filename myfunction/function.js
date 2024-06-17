// Funzione per generare 5 numeri random da 1 a 100

function generaNumeriCasuali(quantita, max) {
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
        console.log(numeroCasuale);
    } 
    // utilizzo di return per ritornare il valore di numeri e richiamarlo 
    return arrayNumeri;
    
}


// definire una funzione per la visualizzazione dei 5 numeri generati da 1 a 100

function visualizzatoreNumeri() {
    // selezionare elemento di riferimento per la creazione di elementi da inserire al suo interno
    const numeriDiv = document.getElementById('numeri');
    // riferimento della quantità dei numeri da inserire tra 1/100
    const numeriCasuali = generaNumeriCasuali(5, 100); 
    
    // inizializzazione di un ciclo for inserendo elementi per quanti sono i numeri casuali generati "5" dopo di che termina 
    for (let i = 0; i < numeriCasuali.length; i++) {
        // creazione riferimento elementi p per l inserimento dei valori in pagina
        const p = document.createElement('p');
        // impostiamo il contenuto dell'elemento x il valore del numero generato
        p.textContent = numeriCasuali[i];
        // appendiamo l'elemento creato
        numeriDiv.appendChild(p);
        // console.log(numeriDiv);
        console.log(p);
    }
}