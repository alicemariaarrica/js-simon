//consegna:
//A.Visualizzare in pagina 5 numeri casuali.
//B.Da lì parte un timer di 30 secondi.
//C.Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//D.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.



//A.Visualizzare in pagina 5 numeri casuali.
let arrNumeri = [] //creazione dell'array di numeri da generare in ordine da manipolarlo in seguito

function generaNum() { //function=parola chiave per indicare al programma che sto creando una funzione //generaNum=il nome che gli do //() servono per dichiarare la funzione e possono contenere parametri
    for (let i = 0; i < 5; i++) { //for=parola chiave //let i = 0 è un'inizializzazione di variabile che funge da contatore per tenere traccia del numero di iterazioni del ciclo. //i < 5 = Questa è la condizione e viene valutata prima di ogni iterazione. Se è vera, il ciclo continua; se è falsa, il ciclo si interrompe. //i++ = è un'incremento di 1. Dopo ogni iterazione, la variabile i viene incrementata di 1. L'operatore i++ è una forma abbreviata per i = i + 1.
        arrNumeri.push(Math.ceil(Math.random() * 10));



    }


    document.getElementById('Output').innerHTML = arrNumeri.join(); //Output = il nome dell'id che ho denominato in HTML //innerHTML = proprietà di un elemento HTML che permette di leggere o modificare il contenuto HTML di quell'elemento e lo mostra nel browser. //I forgot the() so the browser didn't show me the correct output //join() è un metodo che appartiene agli array e combina tutti gli elementi dell'array arrNumeri in una stringa unica, separando ciascun elemento con una virgola (di default).

}

generaNum(); //è una 2chiamata di funzione' che serve ad invocare la funzione generaNum che quindi la fa mettere in pratica


//B.Da lì parte un timer di 30 secondi.

let arrTimer = []

function Timer() {
    for (let i = 30; i > 0; i++) {
        

    }

    
}
Timer();