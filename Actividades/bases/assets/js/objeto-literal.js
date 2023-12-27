

let personaje = {
    nombre: 'Andrés',
    apellido: 'Gómez',
    edad: 19,
    direccion: {
        calle: 'Calle Medellín',
        numero: 1010,
        edificio: 'Castillo premium'
    },
    trajes: ['Gala', 'Formal', 'Casual']
};

console.log(personaje);
console.log('Nombre y apellido: ' + personaje.nombre + ' ' + personaje.apellido);
console.log('Edad: ' + personaje.edad);
console.log('Otra vez el nombre: ' + personaje['nombre']);
console.log('Dirección: ' + personaje.direccion.calle);
console.log('Trajes elegido: ' + personaje.trajes[1]);
console.log('Ultimo traje: ' + personaje.trajes[personaje.trajes.length -1]);

const x = 'numero';
console.log('Numero de dirección: ', personaje.direccion[x]);

delete personaje.edad;
console.log('Eliminamos la propiedad edad: ', personaje);

personaje.casado = true;
console.log('Agregamos la propiedad casado: ', personaje);

const entriesPares = Object.entries(personaje);
console.log("Devolvemos los pares con .entries: ", entriesPares);

Object.freeze(personaje);
personaje.dinero = 670000;
console.log("Congelamos el array y no agrego dinero: ", personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
console.log('Nombre de las propiedades: ', { propiedades });

const valores = Object.values(personaje);
console.log('Nombre de los valores de las propiedades: ', { valores });

