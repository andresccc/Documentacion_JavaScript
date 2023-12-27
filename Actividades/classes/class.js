console.log('----------------------------------');

class PersonaNatural{

    //son propiedades de clases
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre, codigo, frase) {
        if (!nombre) throw Error('necesitamos el nombre');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        console.log('Hola!');
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

tiaMery.miFrase();
