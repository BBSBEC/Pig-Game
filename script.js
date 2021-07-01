'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const img = document.querySelector('img');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let number=0,current = 0,player = 0,total0=0,total1=0;
score0.textContent = 0;
score1.textContent = 0;
const activeplayer0 = () => {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
}
const activeplayer1 = () => {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
}
const setcurrent0 = (any) => {
    current0.textContent = any;
}
const setcurrent1 = (any) => {
    current1.textContent = any;
}
const setscore0 = (any) => {
    score0.textContent = any;
}
const setscore1 = (any) => {
    score1.textContent = any;
}
const player0win = () => {
    player0.classList.add('player--winner');
}
const player1win = () => {
    player1.classList.add('player--winner');
}
document.querySelector('.btn--roll').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 6)+1;
    img.src = `Images/dice-${number}.png`;
    if (!(score0.textContent >= 100 || score1.textContent >= 100)) {
        if (!(number === 1)) {
            current = current + number;
            // if (player === 0) {
            //     setcurrent0(current);
            // } else {
            //     setcurrent1(current);
            // }
            player == 0 ? setcurrent0(current) : setcurrent1(current);
        } else {
            current = 0;
            if (player === 0) {
                player = 1;
                activeplayer0();
                setcurrent0(current);
                current = 0;
            } else {
                player = 0;
                activeplayer1();
                setcurrent1(current);
                current = 0;
            }
        }
    } else {
        // if (score0.textContent >= 100) {
        //     player0.classList.add('player--winner');
        // }
        // else {
        //     player1.classList.add('player--winner');
        // }
        score0.textContent >= 100 ? player0win(): player1win();
    }
    
})
document.querySelector('.btn--hold').addEventListener('click', function () {
    if (player === 0) {
        total0 = total0 + current;
        current = 0;
        activeplayer0();
        setcurrent0(0);
        setscore0(total0);
        player = 1;
    } else {
        total1 = current + total1;
        current = 0;
        activeplayer1();
        setcurrent1(0);
        setscore1(total1);
        player = 0;
    }

})
document.querySelector('.btn--new').addEventListener('click', function () {
    current = 0;
    total1 = 0;
    total0 = 0;
    player = 0;
    setscore1(0);
    setscore0(0);
    setcurrent0(0);
    setcurrent1(0);
    activeplayer0();
})