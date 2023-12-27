/**
 * Días de semana abrimos a las 11
 * Fines de semana a las 9
 */

// Entra a un sitio web para consultar si está abierto hoy...

const dia = 5; //0: domingo... 1:lunes...
const horaActual = 10;

let arrayDia = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

let horaApertura;
let mensaje;

/*
if (dia === 0 || dia === 6) {
if ([0,6].includes(dia)) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Fecha en semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = 'estamos abiertos.';
} else {
    mensaje = `estamos cerrados. Vuelve a las ${horaApertura}.`;
}
*/
// Otra forma de hacerlo

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'estamos abiertos.' : `estamos cerrados. Vuelve a las ${horaApertura}.`;

console.log('Hoy es', arrayDia[dia], 'y abrimos a las', horaApertura);
console.log('Como son las',horaActual,mensaje)