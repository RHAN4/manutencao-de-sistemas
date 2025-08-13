// DOM

const x = document.querySelector('#x')
const bt_neymar = document.querySelector('#bt_neymar')
const bt_cristiano = document.querySelector('#bt_cristiano')
const bt_erick = document.querySelector('#bt_erick')

// Eventos

bt_neymar.addEventListener('click', neymar)
bt_cristiano.addEventListener('click', cristiano)
bt_erick.addEventListener('click', erick)

// Funções

function neymar() {
    x.src = 'images/neymar.jpg'
}

function cristiano() {
    x.src = 'images/cristiano.jpg'
}

function erick() {
    x.src = 'images/erick.jpeg'
}