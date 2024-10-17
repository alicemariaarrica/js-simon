//consegna:
//A.Visualizzare in pagina 5 numeri casuali.
//B.Da lì parte un timer di 30 secondi.
//C.Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//D.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.



// 1. Creo un array per i numeri casuali
let arrNumeri = [];

// 2. Creo una funzione per generare 5 numeri casuali
function generaNum() {
    for (let i = 0; i < 5; i++) { 
        
        let numeroCasuale = Math.ceil(Math.random() * 10);
        arrNumeri.push(numeroCasuale); 
    }

    
    document.getElementById('Output').innerHTML = arrNumeri.join(', '); //---> serve per mostrare i numeri nella pagina
}

// 3. Chiamo la funzione per far si che appunto generi i numeri
generaNum();

// 4. Uso Timeout per far si che dopo 30 secondi i numeri si nascondino
setTimeout(() => {
    document.getElementById('Output').innerHTML = ''; //---> Output serve per nascondere i numeri nella pagina
    mostraInput(); //---> Mostro gli input per l'utente
}, 30000); 

// 5. Creo una funzione per mostrare gli input
function mostraInput() {
    let inputSection = `<h2>Inserisci i numeri che hai visto:</h2>`;
    for (let i = 0; i < 5; i++) {
        inputSection += `<input type="number" class="user-input" placeholder="Numero ${i + 1}">`; //---> Creo un input per ogni numero
    }
    inputSection += `<button id="submit-btn">Invia</button>`; // Pulsante per inviare i numeri
    document.getElementById('input-section').innerHTML = inputSection; // Mostriamo gli input

    // 6. Creo un bottone che quando viene cliccato genera un evento
    document.getElementById('submit-btn').addEventListener('click', () => {
      
        const userInputs = [];
        const inputs = document.querySelectorAll('.user-input');
        for (let input of inputs) {
            userInputs.push(parseInt(input.value)); ////---> Aggiungo i valori all'array
        }

        // 7. Con filter filtro i numeri che sono stati indovinati
        const correctNumbers = arrNumeri.filter(num => userInputs.includes(num)); 

        // 8. Mostro il risultato nella pagina
        document.getElementById('result').innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`;
    });
}