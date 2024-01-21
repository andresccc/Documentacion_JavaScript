console.log('----------------------------------');

class Singleton {
    static _instancia;
    nombre = '';
    
    constructor(nombre = '') {
        if (!!Singleton._instancia) {
            return Singleton._instancia;
        }

        Singleton._instancia = this;
        this.nombre = nombre;
    }
}

const instancia = new Singleton('Andrés');
const instancia1 = new Singleton('Felipe');
console.log(instancia);
console.log(instancia1);