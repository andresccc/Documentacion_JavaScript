

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());
console.log(!regresaTrue());

console.log('No regresa ambos: ', regresaFalse() && regresaTrue())
console.log('Si regresa ambos: ', regresaTrue() && regresaFalse())

console.warn('===ASIGNACIONES===');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150 && false && 'No va a asignar este';
console.log('El valor de la variable a1 && depende de donde esté el false', a1);

const a2 = false || soyFalso || 'texto me asigna' || 'No va a asignar este';
console.log('El valor de la variable a2 || depende de donde esté el primer true:', a2);

