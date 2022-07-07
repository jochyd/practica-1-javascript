let number = parseInt(prompt("Escribe el primer numero"));
let number2 = parseInt(prompt("Escribe el segundo numero"));
let number3 = parseInt(prompt("Escribe el tercer numero"));

console.log(number)
console.log(number2)
console.log(number3)


if (number >= number2 && number >= number3) {
    document.write('El primer numero es el mayor de los 3, el resultado es ' + number);
}else if(number2 >= number && number2 >=number3){
    document.write('El Segundo numero es el mayor de los 3, el resultado es ' + number2);
}else if(number3 >= number && number3 >= number2){
    document.write('El tercer numero es el mayor de los 3, el resultado es ' + number3);
}
