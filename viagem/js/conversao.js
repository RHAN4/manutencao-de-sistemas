// DOMs
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const resultado = document.querySelector('#resultado')
const botao = document.querySelector('#botao')

// Eventos
botao.addEventListener('click', calcular)


// Funções
function calcular (){
    const quilometro = Number(distancia.value);
    const consumoVeiculo = Number(consumo.value);
    const precoCombustivel = Number(preco.value);

    const valorFinal = (quilometro / consumoVeiculo) * precoCombustivel;
        resultado.textContent = `O valor total da viagem será de: R$ ${valorFinal.toFixed(2)}`

}