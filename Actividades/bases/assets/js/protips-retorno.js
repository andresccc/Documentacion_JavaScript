
function crearPersona(nombre, apellido) {
    return {
    nombre, //no es necesario poner nombre: nombre
    apellido //no es necesario poner apellido: apellido
    }
}

const persona = crearPersona('Andrés', 'Gómez');
console.log('El nombre de la persona es', persona);

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona2 = crearPersona('Andrés2', 'Gómez2');
console.log('El nombre de la persona 2 es', persona2);

function imprimeArgumentos() {
    console.log(arguments); //arguments no está en función de flecha
}
imprimeArgumentos(10, true, false, 'Andrés');

const imprimeArgumentos2 = (...arguments) => {
    return arguments; //arguments no está definido en función de flecha
}
const [edad, casado, vivo, nombre, saludo] = imprimeArgumentos2(20, true, false, 'Felipe', 'Hola');
console.log({ edad, casado, vivo, nombre, saludo});

const imprimeArgumentos3 = (edad, ...arguments) => {
    console.log({edad, arguments}); //arguments no está definido en función de flecha
}
imprimeArgumentos3(19, true, false, 'Felipe');

const { apellido: nuevoApellido } = crearPersona('Andrés', 'Gómez');
console.log('El apellido es', { nuevoApellido });

const miPersona = {
    nombre: 'Andrésito',
    apellido: 'Gómecito',
    edad: 119,
    direccion: {
        calle: 'Calle Medellín',
        numero: 1010,
        edificio: 'Castillo premium'
    },
    trajes: ['Gala', 'Formal', 'Casual']
};

const imprimePropiedades = ({nombre, apellido, edad = 0, trajes}) => {
    console.log({nombre});
    console.log({apellido});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(miPersona);