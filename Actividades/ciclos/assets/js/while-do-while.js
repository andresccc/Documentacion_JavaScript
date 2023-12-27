

const carros = ['Ford', 'Nissan', 'Chevrolet', 'Renault', 'Toyota'];

let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn('Do while');
let j = 0;

do {
    console.log(carros[j]);
    j++;
} while (carros[j]);

function cerrarPestaña(identificador) {
    // Obtiene la referencia a la pestaña.
    var pestaña = document.getElementById(identificador);
  
    // Cierra la pestaña.
    pestaña.close();
  }
  