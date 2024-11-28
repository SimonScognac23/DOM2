// il querySelector mi permette di catturare un elemento HTML e di salvarlo in una locazione di memoria che può essere una variabile o una costante attraverso un selettore che deve essere una stringa
let createArticleButton = document.querySelector('#createArticle');





// all'evento 'click' fai scattare qualcosa...
// addEventListener questo metodo aggiunge un ascoltatore di eventi il quale allo scattare di un determinato evento fa partire una callback
createArticleButton.addEventListener('click', () => {



    //   Il metodo .value è usato per ottenere il valore attuale di un campo di input, come un <input>, un <textarea>, o altri campi di moduli e dopodichè verra salvato nella variabile letValue e contentValue
    let titleValue = document.querySelector('#title').value;
    let contentValue = document.querySelector('#content').value;




    // Verifica che i campi non siano vuoti altrimenti fai scattare un alert!
    if (titleValue && contentValue) {


        // Verifica se ci sono già 5 articoli e a 5 appare un alert
        let articleCount = document.querySelectorAll('.article').length;
        if (articleCount >= 5) {
            alert('Basta troppi articoli!!!');
            return; // Blocca l'esecuzione se ci sono già 5 articoli
        }




        // Ottieni la data di pubblicazione
        let date = new Date();  //    new Date() crea un nuovo oggetto Date in JavaScript che rappresenta la data e l'ora correnti, cioè il momento in cui il codice viene eseguito
        let formatDate = date.toLocaleDateString();  //   toLocaleDateString() è un metodo dell'oggetto Date che restituisce una rappresentazione della data formattata secondo le convenzioni locali dell'utente





        // Creiamo l'articolo grazie al contenuto delle backtick,  Viene creato un div con la classe article, questo div fungerà da contenitore per l'articolo appena creato
        // in <h2> ci andremo a inserire il titolo che abbiamo salvato nella variabile titleValue
        // in <p>  ci andremo a inerire il contenuto riportato nella variabile contentValue
        // il backtick mi permette di mandare il testo a capo, cosi si può facilmente distinguere il titolo dal contenuto
        let article = `  
        <div class="article p-4 mb-4 bg-light rounded shadow-sm">  
          <h2 class="text-primary">${titleValue}</h2> 
          <p class="text-muted">${contentValue}</p>
          <p><i class="text-secondary">Data di pubblicazione: ${formatDate}</i></p>
        </div>
      `;




        // Aggiungiamo l'articolo al contenitore
        // questa parte del codice trova l'elemento HTML con l'ID articleContainer che abbiamo creato dentro ad un <div>
        // innerHTML rappresenta il contenuto di un tag ossia quello che ci sta dentro, ossia estrapola il contenuto all'interno di article
        // sto prendendo l'HTML attuale di #articleContainer con inner.HTML e aggiungendo il nuovo article al suo interno, preservando il contenuto precedente e aggiungendo quello nuovo alla fine.
        document.querySelector('#articleContainer').innerHTML += article;

        // Pulisco gli input
        document.querySelector('#title').value = '';
        document.querySelector('#content').value = '';



    } else {
        // Mostra un alert se uno dei campi è vuoto
        alert('ma non hai scritto nulla!!');
    }
});
