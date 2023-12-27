
const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Aquaman'];

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    
}

console.warn('For in, se sale del ciclo cuando no hayan mas elementos en heroes.');
for (const i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of, obtener referencias a valores de objetos o arreglos, obtiene el valor de heroe directamente en la i');
for (const heroe of heroes) {
    console.log(heroe);
}

