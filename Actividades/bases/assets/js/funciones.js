function saludar() {
    console.log('Hola mundo');
}
saludar();
saludar();

const saludar2 = function() {
    console.log('Forma correcta de crear funciones');
    console.log('Se llama función anonima');
}
saludar2();

const saludo = function(nombre) {
    console.log('Hola ' + nombre);
}
saludo('Andrés Gómez');

const saludarFlecha = (parametro) => {
    console.log('Hola ' + parametro + ' esto es una función de flecha.');
}

saludarFlecha('Andrés Gómez');

function retornarSaludar(nombre) {
    console.log('Hola mundo');
    console.log('Hola ' + nombre);
    return 1;

    //Esto no se va a ejecutar
    console.log('Soy un codigo que está despues del return.');
}
retornarSaludar('Jorge')
const retornarSaludarConst = retornarSaludar('Andrés');
console.log('La función retornarSaludar retornó: ' + retornarSaludarConst);

const retornar2 = () => {
    console.log('Esto es un console log');
    return [1, 2, 3, 4];
}

retornar2();
const retornar2Const = retornar2();
console.log('Retonamos array ', retornar2Const[2], ' y ' , retornar2Const[1]);

const sumar = (a, b) => {
    return a + b;
}

console.log('La suma es ', sumar(1, 2));

const sumar2 = (a, b) => a + b;
console.log('La suma 2 es', sumar2(4, 2));

const getAleatorio = () => {
    return Math.random();
}

console.log('El numero aleatorio es', getAleatorio() * 10);

const getAleatorio2 = () => Math.random();
console.log('El numero aleatorio 2 es', getAleatorio2()*10);