const Name = prompt ("Qual'è il tuo nome?");
//The variant "name" risulted -deprecated-.

const surname = prompt ("E il tuo cognome?");
const favoriteColor = prompt ("Ora dimmi il tuo colore preferito:");
let number1 = prompt ("Adesso segli un numero:");
let number2 = prompt("Un altro numero:");

let divisorResult = number1/number2;

console.log(Name+surname+favoriteColor+divisorResult);

document.getElementById("p-nome").innerHTML = Name;
document.getElementById("p-surname").innerHTML = surname;
document.getElementById("p-password").innerHTML = Name+surname+favoriteColor+divisorResult;

