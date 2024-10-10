//consegna:
//A.Visualizzare in pagina 5 numeri casuali.
//B.Da lì parte un timer di 30 secondi.
//C.Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//D.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

//A.
//1. inizializzare un array vuoto con una var per contenere i numeri casuali generati
//2. creare una variabile a cui collegare l'elemento HTML per visualizzare i numeri casuali generati
//3. creare la funzione che racchiude il modo per generare i benedetti numeri casuali al cui interno si troverà un ciclo for per generare un blocco di codice 5 volte, una combinazione di operazioni per generare i numeri causali ed aggiungerli al''array (tra cui una chiamata a un metodo dell'array)
//4. creare un'altra serie di operazioni tra cui un'altra chiamata a metodo dell'array per far si che i numeri casuali generati vengano visualizzati nella pagina web all'interno dell'elemento HTML specificato
//5. invocare la funzione per esguirne il codice


let arrNumeri = []

function generaNum(min, max) {
    for (let i = 0; i < 5; i++) {
        arrNumeri.push(Math.floor(Math.random() * (max - min)) + min);
    }
      Output.innerHTML = arrNumeri;
}
generaNum(1, 10);


