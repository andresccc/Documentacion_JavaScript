# Documentación JavaScript

## Aprendizaje

### GENERAL

#### // - /**/ -> Agregar comentarios

#### undefined - null - boolean - string - symbol - bigint - number - object. -> Tipos de datos

#### let -> Declarar una variable en forma de bloque delimitado por {} no se puede re-declarar pero si modificadar

#### const -> Declarar una variable en forma de bloque delimitado por los {} no se puede re-declarar ni modificar

#### 'use strict' -> Al colocarlo evita errores con un modo restrictivo, recomendado para las funciónes anonimas

## TIPOS DE DATOS PRIMITIVOS

### typeof -> Revisar que tipo de dato es una variable

#### Boolean -> True / False

#### Null -> Sin valor en absoluto

#### Undefined -> Declarado pero sin valor asignado

#### Number -> Entero, flotando, etc

#### String -> Una cadena de caracteres

#### Simbol -> Un valor nunca será igual

### FECHAS Y HORAS

#### Date() -> Obtiene 2023-11-23T10:28:22.999Z

#### getFullYear() -> Devuelve el año de la fecha

#### getMonth() -> Devuelve el mes de la fecha, numerado del 0 al 11

#### getDate() -> Devuelve el día del mes de la fecha

#### getHours(), getMinutes(), getSeconds(), getMilliseconds() -> Devuelve horas, minutos, segundos y milisegundos

#### getDay() -> Devuelve el día de la semana de la fecha

#### getTimezoneOffset() -> Devuelve el desplazamiento de zona horaria de la fecha

#### format("YYYY-MM-DDTHH:mm:ss.sssZ") -> Permite elegir el formato

### METODOS

#### .forEach((elemento, indice, array)=>{}); -> Imprimir cada dato, es como un for

#### .includes(arreglo) -> Preguntar si algo existe dentro del arreglo

#### .disabled = true; -> Deshabilitar botones

#### isNaN(variable) -> valido si la variable NO es un numero, devuelve true si no lo es

#### parseInt("123") -> Convertir a numero un texto

#### setTimeout(() => { instrucción}, milisegundos); -> Atrasar la ejecución de una función

### SECUENCIAS EN CADENAS DE TEXTO

#### cadena += ""; -> Concatenar datos a una cadena ya existente

#### .length -> Para encontrar la longitud del valor de la cadena (String)

#### string[0] -> Obtener el primer caracter del string

#### .length - 1 -> Obtener el ultimo caracter de una cadena de texto

#### .substring(start, end) -> sirve para extraer una subcadena de una cadena de texto

#### \' - \"" -> Con la \ prodrás poner los caracteres especiales dentro de tu texto

#### \n -> Salto de línea nueva

#### \t -> Tabulador

#### \r -> Retorno de carro

#### \b -> Retroceso

#### \f -> Fuente de formulario

#### \v -> Tabulador vertical

### ARRAY

#### const array = ["a", "b", "c"]; -> Almacenar varios datos en un solo lugar

#### array[0] = "d"; -> Modificar los datos del arreglo

#### const array = [["a", 1], ["b", 2]]; -> Array dentro de otro array

#### const arr = array[3][0][1]; -> Acceder a arreglos multidimensionales con índices

#### .push(["e", "f"]) -> Añadir datos al final del arreglo

#### .unshift(["e", "f"]) -> Añadir datos al inicio del arreglo

#### .pop() -> Elimina el dato al final del arreglo

#### .splice(posicion, cuantosElementos) -> Elimina datos del arreglo, recibe un punto inicial y cuantos son

#### .indexOf('NombreVariable') -> Buscar la posición de un elemento, -1 es que no lo encontró

#### delete -> Eliminar una propiedad del array

#### array.nuevaPropiedad; -> Para agregar una nueva propiedad, solo hacemos mención

#### .entries() -> Da los pares [clave, valor] para cada elemento del array

#### .freeze() -> Bloquear el array para no poder modificar propiedades

#### .getOwnPropertyNames() -> Devuelve los nombres de las propiedades en un array

#### .values() -> Devuelve los valores  de las propiedades en un array

### FUNCIONES

#### function(); -> Llamar o invocar una función desde algún lugar

#### function prueba(param1, param2) {} -> Funciones con variables que deben ser introducidos cuando se llama

#### const array = (params) => {} -> Funcion de flecha

#### (() => { elementos })(); -> Función de flecha anonima que se llama ella misma

### CICLOS

#### for (const i in array) { console.log(array[i]); } -> Sale del ciclo cuando no hayan mas elementos en el arreglo

#### for (const i of array) { console.log(i); } -> i guarda directamente el objeto en la posición del arreglo

#### variable = (condición) ? si cumple : si no cumple; -> Para declarar una variable si se cumple o no una condición

### COMANDOS DOCUMENT

#### .querySelector('elemento') -> Devuelve el primer elemento que coincide con el selector CSS especificado

#### .querySelectorAll('elemento') -> Devuelve el todos los elementos que coinciden con el selector CSS especificado

#### .addEventListener('Ejm un click', function() {}) -> Método que te avisa cuando ocurre un evento específico

#### .createElement('elemento') -> Crear un elemento

#### .append() -> Agregar un elemento al final de un elemento contenedor

### CLASES

#### class Clase { propiedades constructor() { } } -> Las clases inician con mayuscula

#### metodo () { } -> Esto es un metodo, casi siempre se pone debajo del constructor

#### this.objeto -> this. se usa para llamar un objeto que se encuentra un nivel mas arriba

####
