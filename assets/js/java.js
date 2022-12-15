const buttonAdd = document.getElementById("add"); //ho selezionato il bottone
const lists = document.getElementById("lists"); //ho selezionato la lista
const textInput = document.querySelector(".textInput"); //ho selezionato l'input

buttonAdd.addEventListener("click", generateList); //con .addEventListener ho assegnato l'evento "clicca"
//alla funzione generateList

function generateList(event) {
  event.preventDefault();
  //metodo event.preventDefault()modo per comunicare al browser che non vogliamo che esegua l’azione predefinita
  if (textInput.value === "") return; //se il valore del testo inserito è zero, non deve eseguire l'azione predef.

  const li = document.createElement("li"); //creato la lista
  lists.appendChild(li); //ho aggiunto alla ul questa lista
  li.appendChild(document.createTextNode(textInput.value)); //ho creato un textnode alla lista che prende il
  //valore del testo che inserisco nell'input

  const buttonDelete = document.createElement("button"); //ho creato il bottone cancella
  buttonDelete.className = "delete"; //gli ho aggiunto la classe delete
  buttonDelete.appendChild(document.createTextNode("X")); //creato il textnode, il testo che deve apparire
  //sul bottone per cancellare
  li.appendChild(buttonDelete); //ho messo questo bottone in li

  textInput.value = ""; //valoe del text input è una stringa

  buttonDelete.addEventListener("click", (event) => {
    const parentNodeEl = event.target.parentNode;
    setTimeout(() => {
      parentNodeEl.remove();
    }, 500);
  }); //ho attribuito un evento clicca al bottone delete, cliccandolo mi rimuove il parent.
  //La proprietà dell'evento target restituisce l'elemento che ha attivato l'evento e poi la elimino con remove.
}
const name = document.getElementById("lists");

function sbarra() {
  document.getElementById("text").style.color = "red";
  document.getElementById("text").style.font = "calibri";
}
