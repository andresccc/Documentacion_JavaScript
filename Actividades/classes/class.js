console.log('----------------------------------');

class PersonaNatural{

    static _conteo = 0;
    static get conteo() {
        return PersonaNatural._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un metodo estatico');
    }

    //son propiedades de clases
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        if (!nombre) throw Error('necesitamos el nombre');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        PersonaNatural._conteo++;
    }

    set setComida(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComida() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    //metodo
    quienSoy() {
        console.log(`Soy ${this.nombre } mi codigo es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`La frase de ${this.codigo} es: "${this.frase}".`)
    }

}

const spiderman = new PersonaNatural('Spiderman', 2435, 'Esta es la frase');
const tiaMery = new PersonaNatural('Tia Mery', 1928, 'Esta es la frase');
const duendeVerde = new PersonaNatural('Duende verde', 5646, 'Esta es la frase');
const policia = new PersonaNatural('Policia', 1234, 'Esta es la frase');
console.log(spiderman);
console.log(tiaMery);
console.log(duendeVerde);
console.log(policia);

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComida = 'El pie de cereza de la tia May';

console.log(spiderman.getComida);
console.log('Conteo estatico', PersonaNatural._conteo);
console.log('Consumimos el get', PersonaNatural.conteo);
console.log('EL metodo estatico responde: ');
PersonaNatural.mensaje();