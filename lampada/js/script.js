// DOM
const lampada = document.querySelector('#lampada')
const bt_ligar = document.querySelector('#bt_ligar')
const bt_desligar = document.querySelector('#bt_desligar')

// Evento
bt_ligar.addEventListener('click', ligar)
bt_desligar.addEventListener('click', desligar)


// Função
function ligar () {
    lampada.src = 'image/lampada-acesa.png'
}

function desligar () {
    lampada.src = 'image/lampada-apagada.png'
}