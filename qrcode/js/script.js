// DOMs

const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

// Eventos

botao.addEventListener('click', gerador)
url.addEventListener('keydown', (event) => {
    if(event.key == 'Enter')
        gerador()
})

// Funções

function gerador() {
    texto = url.value
    if (texto) {
        qr.innerHTML = ''
        code = new QRCode(qr, {
            text: texto,
            width: 250,
            height: 250,
            colorDark: 'rgba(0, 0, 0, 0)'
        })
    } else {
        qr.innerHTML = ''
    }
}