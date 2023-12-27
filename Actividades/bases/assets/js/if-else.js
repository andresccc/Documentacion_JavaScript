

let a = 5;

if (a > 10) {
    console.log(true)
}

if (a < 10) {
    console.log(false)
}

const hoy = new Date();
console.log(hoy);

const diaSemana = hoy.getDay();
const arrayDia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log('El día de la semana es', arrayDia[diaSemana], '. Siempre va a mostrarte tu día.');