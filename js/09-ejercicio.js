

function countVowel(palabra) { 

    const number = palabra.match(/[aeiou]/gi).length;

    return number;
}

const palabra = prompt('Entra una palabra: ');

const resultado = countVowel(palabra);

console.log(resultado);
document.write(resultado)

// forma de hacerlo con funcion, no entendia lo que era gi, pero ya me lo explico Emi por privado :)