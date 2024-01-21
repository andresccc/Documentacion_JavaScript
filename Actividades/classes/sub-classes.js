console.log('----------------------------')
class PersonaNatural2 {

    static _conteo = 0;
    static get conteo() {
        return PersonaNatural2._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un metodo estatico');
    }

    //son propiedades de clases
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        if (!nombre) throw Error('necesitamos el nombre');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        PersonaNatural2._conteo++;
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

class Heroe extends PersonaNatural2{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) { 
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }

    //Puedo reescribir y re utilizar de la clase padre
    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman2 = new Heroe('Spiderman', 12343, 'Soy Spiderman 2');

console.log(spiderman2);
spiderman2.quienSoy();