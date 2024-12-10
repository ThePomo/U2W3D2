//-------Primo esercizio------//

//globali
const savedValueElement = document.getElementById("savedValue");
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");

//reset
function resetOnPageLoad() {
  localStorage.clear();
  updateSavedValue();
  nameInput.value = "";
}

//aggiunge valore
function updateSavedValue() {
  const savedName = localStorage.getItem("name");
  savedValueElement.textContent = savedName
    ? `Valore salvato: ${savedName}`
    : "Nessun valore salvato";
}

saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("name", name);
    updateSavedValue();
  } else {
    alert("Per favore, inserisci un nome");
  }
});

//btn rimuovi
removeBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  updateSavedValue();
});

//--------Secondo Esercizio------//

const counterElement = document.getElementById("counter");

let counter = parseInt(sessionStorage.getItem("counter")) || 0;
counterElement.textContent = counter;

setInterval(() => {
  counter++;
  counterElement.textContent = counter;
  sessionStorage.setItem("counter", counter);
}, 1000);
