
let a = 10;
let b = a;
a = 30;

console.log({a, b});

let Andres = { nombre: 'Andrés' };
let Carlos = Andres;
Carlos.nombre = 'Jorge';

console.log('Solo cambie Carlos pero se cambia todo', { Andres, Carlos }, 'esto debido a que JS funciona por relación.');

let Andres2 = { nombre2: 'Andrés2' };
let Carlos2 = {...Andres2};
Carlos2.nombre2 = 'Jorge2';

console.log('Cuando no queremos que cambien ambos nombres al cambiar el objeto por referencia', { Andres2, Carlos2 }, 'podemos agregar {...objetoReferencia } y esto evitará que se cambie el primer valor.');

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony })

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];
console.log(newNumbers);

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table(frutas, otrasFrutas);
console.table({ frutas, otrasFrutas });

console.table(frutas, otrasFrutas2);
console.table({ frutas, otrasFrutas2 });