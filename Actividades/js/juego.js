//patron modulo
//función anonima
(() => {
    'use strict'

    let deck = [], puntosJugadores = [];
    const tiposCartas = ['C', 'D', 'H', 'S'],
          especialesCartas = ['A', 'J', 'Q', 'K'];

    //Referencias del HTML
    //botones
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');
    //Div
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML = document.querySelectorAll('small');

    //Iniciar juego
    const iniciarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0); 
        }
        
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }
    
    //Está función crea una nueva baraja
    const crearDeck = () => {
        deck = [];
        //cartas del 2 al 10
        for (let i = 2; i <= 10; i++) {
            for (let tipoCarta of tiposCartas) {
                deck.push(i + tipoCarta);
            }
        }
        
        //cartas A, J, Q, K
        for (let especialCarta of especialesCartas) {
            for (let tipoCarta of tiposCartas) {
                deck.push(especialCarta + tipoCarta);
            }
        }

        //Revolver la baraja, liberia underscore
        return _.shuffle(deck);
    }

    //Está función permite tomar una carta
    const tomarCarta = () => {
        //Si no quedan cartas en la baraja saca error
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        //Quita la ultima carta de la baraja
        return deck.pop();
    }

    //Da el valor a las cartas
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        //Valida si es numero o no y asigna valores, es una mala practica
        return (isNaN(valor)) ?
            ('A' === valor) ? 11 : 10
            : parseInt(valor); 
    }

    const acomularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    //crear carta
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    //turno de la computadora
    const turnoComputadora = (puntosJugador) => {

        let puntosComputadora = 0;
        do {
            const carta = tomarCarta();
            puntosComputadora = acomularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
                
        } while ((puntosComputadora < puntosJugador) && (puntosJugador <= 21));
        
        setTimeout(() => {
            indicarGanador();
        }, 50);
    }
    // Indicar quien ganó
    const indicarGanador = () => {

        const [ puntosJugador, puntosComputadora ] = puntosJugadores;
        if ((puntosComputadora <= 21) && ((puntosComputadora > puntosJugador) || (puntosJugador > 21))) {
            alert('Gana la computadora, la casa se lleva el dinero');
        } else if ((puntosJugador <= 21) && ((puntosComputadora < puntosJugador) || (puntosComputadora > 21))) {
            alert('Gana el jugador, puede retirar el dinero');
        } else {
            alert('Tenemos un empate');
        }
    }

    //iniciar juego
    iniciarJuego();

    //Eventos
    btnNuevo.addEventListener('click', () => {
        console.clear();
        
        iniciarJuego();
        //crearCarta();
    })

    btnPedir.addEventListener('click', () => {
        const carta = tomarCarta();
        const puntosJugador = acomularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Perdiste, tienes mas de 21 puntos');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.log('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });
})();


