

const arr = new Array(10);
console.log(arr);

const arr2 = [];
console.log(arr2);

let videoJuegos = ['Mario 3', 'Megan', 'IT', 'Call of duty'];
console.log({ videoJuegos });
console.log(videoJuegos[1])

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    1 + '2',
    function () { },
    () => { },
    { a: 1 },
    ['x', 'Magaman', 'Zero', 'Dr.Light', ['Caballo 1',
        'Caballo 2',
        'Caballo 3',
    ]]
];

console.log(arregloCosas);
console.log(arregloCosas[8][2]);
console.log(arregloCosas[8][4][1]);