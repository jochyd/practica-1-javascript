let number = parseInt(prompt('Escribi el primer numero'));
let number2 = parseInt(prompt('Escribi el segundo numero'));

console.log(number);
console.log(number2);

if(number > number2){
    document.write('El primer numero es mayor, el numero ingresado es ' + number);
}else if (number2 > number){
    document.write('El segundo numero es mayor que el primer numero, el numero es ' + number2);
}else{
    document.write('Los numeros ingresados son iguales, el numero ingresado es ' + number2)
}