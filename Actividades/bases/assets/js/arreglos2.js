

let numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, index) => console.log("Número: " + numero + ", Índice: " + index));

let numeros2 = [1, 2, 3, 4, 5];
numeros2.forEach((numero) => console.log("Número multiplicado por 2: " + numero*2));

let numeros3 = [1, 2, 3, 4, 5];
numeros3.forEach((numero) => console.log("Número elevado al cuadrado: " + Math.pow(numero, 2)));

numeros4 = [1, 2, 3, 4, 5, 6];
numeros4.forEach((numero) => {
    if (numero % 2 == 0) { console.log("Los numero pares son: "+ numero) };
});


let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
matriz.forEach((ConjuntoNumerico, indice) => {
    let suma = 0;
    ConjuntoNumerico.forEach((Numero) => {
        suma += Numero;
    });
    console.log("La suma del indice " + (indice + 1) + " es: " + suma);
});

let juegos = ["Juego 1", "Juego 2", "Juego 3", "Juego 4", "Juego 5"];
console.log('Cantidad elementos:',juegos.length);
console.log('Elemento 0:', juegos[0]);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log('Primer elemento:',primero);
console.log('Ultimo elemento:', ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

juegos.push('Juego .push()', 'Juego agregado 2');
console.log('Array despues de agregar un elemento: ', juegos);

juegos.unshift('Juego .unshift()', 'Juego agregado 3');
console.log('Se agregan nuevos elementos: ', juegos);

juegos.pop();
console.log('Se elimina el ultimo elemento del arreglo con .pop(): ', juegos);

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log('Juegos borrados: ' + juegosBorrados + '. Como quedó el arreglo: ' + juegos);

let juegosIndex = juegos.indexOf('Juego 4');
console.log('La posición del juego 4 es: ' + juegosIndex + '. Lista array para validar posición: ' + juegos);

