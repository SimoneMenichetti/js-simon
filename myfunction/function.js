
let arrayNumeri = [];
// Funzione per generare 5 numeri random da 1 a 100
function generaNumeriCasuali(quantita, max) {
    // creazione di un array per contenere i numeri generati 
    // const arrayNumeri = [];
    // inizio di un ciclo while per riempire l'array dedicato ad i numeri generati
    while (arrayNumeri.length < quantita) {
        // utilizzo di math.floor per la generazione del numero random
        const numeroCasuale = Math.floor(Math.random() * max) + 1;
        // controllo dei numeri generati ed inserimento del numero solo se nell'array numeri non è gia stato inserito quel numero generato
        if (!arrayNumeri.includes(numeroCasuale)) {
            arrayNumeri.push(numeroCasuale);
        }
        console.log("I numeri univoci generati sono",numeroCasuale);
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
        console.log("Gli elementi creati nel div numeri sono",p);
    }

    // far partire un timer di 30 secondi utilizzando set timeout / 30000        millisecondi equivale a 30 secondi


setTimeout(
    function() {
        // creazione riferimento per nascondere i numeri al termine dei 30 secondi
        nascondiNumeri(numeriDiv);
        mostraInputNumeri();
    }, 30000); 

    // utilizzo funzione di rimozione innerhtml per nascondere i numeri 
    function nascondiNumeri(numeriDiv) {
        numeriDiv.innerHTML = ''; 
    }
}

// interazione utente inserimento dei 5 numeri visti precedentemente in pagina uno alla volta

// Funzione per mostrare l'input per i numeri dell'utente
function mostraInputNumeri() {
    // selezione riferimento per modificarne lo style in block per visualizzare l interazione utente
    document.getElementById('inputNumeri').style.display = 'block';
}

// Funzione per verificare i numeri inseriti dall'utente

function verificaNumeri() {
    // creazione riferimento input html 
    const numeriUtenteInput = document.getElementById('numeriUtente').value;
    // utilizzo di split per dividere una stringa in un array di sottostringhe
    const numeriUtenteArray = numeriUtenteInput.split(',');
    const numeriUtente = numeriUtenteArray.map(
        function(numeroUtente) {
            // utilizzo della proprietà trim per rimuovere gli spazi nell interazione utente 
            return parseInt(numeroUtente.trim());
    
        }   
);
    // utilizzo della proprietà filter per filtrare gli elementi di un array in base a un criterio definito e restituisce solo quelli che corrispondono a tale criterio. in questo caso i numeri indovinati 
    const numeriIndovinati = numeriUtente.filter(
        function(numeroUtente) {
            return arrayNumeri.includes(numeroUtente);
        }
    );

    const risultato = 'il totale dei numeri indovinati è ' + numeriIndovinati.length
    const numeriGiusti = ' i numeri indovinati sono:' + numeriIndovinati.join(', ');
    document.querySelector('.risultato').textContent = risultato;
    document.querySelector(".numeri-indovinati").textContent= numeriGiusti;
}