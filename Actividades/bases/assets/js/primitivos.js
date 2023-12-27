//Datos primitivos
let nombre = 'Andrés Gómez';

console.log(nombre);

nombre = 'Felipe Castaño';

console.log(nombre);
console.log(typeof nombre);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);

if (symbol1 === Symbol('a')) {
    console.log('Los símbolos son iguales');
  } else {
    console.log('Los símbolos no son iguales');
  }
  