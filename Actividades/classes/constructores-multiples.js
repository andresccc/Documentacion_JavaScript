
class Personita {

    static porObjeto( {nombre, apellido, pais}) {
        return new Personita(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido} y ${this.pais}`);
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Florez',
    pais1 = 'Honduraz';

const andresito = {
    nombre: 'Andrés',
    apellido: 'Gomez',
    pais: 'Colombia'
}

const persona1 = new Personita(nombre1, apellido1, pais1);
const persona2 = Personita.porObjeto(andresito);

persona1.getInfo();
persona2.getInfo();