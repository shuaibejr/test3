// Write your code below
const globalVariable = "I am global!"; // defined in global scope

function myFunction() {
  const localVariable = "I am local!"; // defined in myFunction scope
  console.log(globalVariable); // logs "I am global!" to the console
  console.log(localVariable); // logs "I am local!" to the console
}

myFunction();


console.log(globalVariable); // logs "I am global!" to the console
console.log(localVariable); // ReferenceError: localVariable is not defined