

const elMayor = (a, b) => (a > b) ? a : b;

const menbresia = (miembro) => (miembro) ? 'es miembro' : 'no es miembro';

console.log('El mayor es', elMayor(10, 15));
console.log('El usuario', menbresia(false));

const amigo = true;
const amigosArray = [
    'Peter',
    'Andrés',
    'Juan',
    'Luis',
    'Miguel',
    (amigo) ? 'es un amigo' : 'no es un amigo',
    elMayor(12, 6)
]

console.log('Amigos', amigosArray);

const nota = 75;
const grado = nota >= 95 ? 'A' :
    nota >= 90 ? 'B' :
        nota >= 80 ? 'C' :
            nota >= 70 ? 'D' :
                nota >= 60 ? 'E' : 'F';
              
console.log({ nota, grado });