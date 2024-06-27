let menorIntervalo = 1;
let maiorIntervalo = 3;
let quantidadeLimiteDeSorteios = maiorIntervalo - menorIntervalo + 1;
let tentativas = 0;
let listaDeNumerosSorteados = [];

//exibirTextoNaTela('h1', 'Jogo do número secreto');
//exibirTextoNaTela('p', `Selecione um número de ${menorIntervalo} a ${maiorIntervalo}`);

let numeroSecreto;
reiniciarJogo();

function exibirTextoNaTela(tag, texto){
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute(){
    tentativas++;
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto após ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é maior.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Selecione um número de ${menorIntervalo} a ${maiorIntervalo}`);
    numeroSecreto = gerarNumeroAleatorio(menorIntervalo, maiorIntervalo);
    limparCampo();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);

    console.log(`Número secreto: ${numeroSecreto}`);
}

function gerarNumeroAleatorio(menorIntervalo, maiorIntervalo){
 //    let numeroSorteado = parseInt(Math.random() * (maiorIntervalo-menorIntervalo+1) + 1);
     let numeroSorteado = parseInt(Math.random() * (maiorIntervalo-menorIntervalo+1) + 1);
 
    console.log(`Numero sorteado: ${numeroSorteado}`);
    if (listaDeNumerosSorteados.length == quantidadeLimiteDeSorteios){
        listaDeNumerosSorteados = [];
        console.log('Limpou a lista');
    }
    console.log(`Lista de Numeros sorteados: ${listaDeNumerosSorteados}`);
    console.log(`Tamanho da lista de Numeros sorteados: ${listaDeNumerosSorteados.length}`);
    console.log(`Quantidade limite da lista: ${quantidadeLimiteDeSorteios}`);

    if (listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio(menorIntervalo, maiorIntervalo);
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}