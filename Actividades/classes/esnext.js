console.log('-----------------------------');

class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #calcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(15, 10);
console.log(rectangulo);