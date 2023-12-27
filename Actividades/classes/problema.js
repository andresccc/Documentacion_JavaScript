const andres  = {
    nombre: 'Andrés',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

andres.imprimir();

// Funcion para crear instancias por eso inicia con mayuscula
// esto se debe usar con la palabra new
// Esto ya no es tan recomendable
function Persona(nombre, edad) {
    console.log('Se ejecutó esta linea');

    this.nombre = nombre;
    this.edad = edad;
    
    this.imprimir = function () {
        console.log(`Nombre: ${nombre} - edad: ${edad}`);
    };
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);

maria.imprimir();
melissa.imprimir();