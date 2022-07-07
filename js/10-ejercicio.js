let number = parseInt(prompt("Escribe un numero"));

console.log(number);

if (number % 2 === 0) {
  document.write('<br> El numero si es divisible en 2</br>');
} else if (number % 3 === 0) {
  document.write('<br> El numero si es divisible en 3</br>');
} else if (number % 5 === 0) {
  document.write('<br> El numero si es divisible en 5 </br>');
} else if (number % 7 === 0) {
  document.write('<br> El numero si es divisible en 7 </br>');
}

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
