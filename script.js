let jogo = document.getElementById('jogo');
const chance = document.getElementById('chance');
const click = document.getElementById('click');
const jogadas = document.getElementById('jogadas');
let chances = 0;
const palavras = ['maça', 'abacate', 'cenoura', 'banana', 'pera', 'goiaba', 'pitaya', 'abacaxi', 'acerola', 'graviola', 'goiaba'];
let letras = [];
let palavraArr = [];

function escolhePalavra(){
    let palavraEscolhida = palavras[Math.floor(Math.random() * 10)];
    return palavraEscolhida = palavraEscolhida.split("");
}

const palavra = escolhePalavra();

chances = palavra.length * 2;

function criaArray(){
    for(i = 0; i < palavra.length; i++){
        palavraArr.push('_');
    }
}

criaArray();

function adicionaLetra(letra){
    for(i = 0; i < palavra.length; i++){
        if(letra === palavra[i]) palavraArr[i] = letra;
    }
}

function verificaLetra(letra){
    return palavra.filter(el => el.includes(letra));
}

function desmembrar(letra){
    if(chances === 0) return;
    if(letras.filter(el => el.includes(letra)).length > 0) return
    letras.push(letra);
    if(verificaLetra(letra).length === 0){
        chances--;
        return
    }
    adicionaLetra(letra);
}

function feedback(){
    let text2 = document.createTextNode(`A palavra possui ${palavra.length} letras. Voce tem ${chances} chances`);
    chance.append(text2);
    if(palavraArr.toString() === palavra.toString()){
        chance.innerHTML = 'VENCEU!';
    }
    if(chances === 0){
        chance.innerHTML = 'PERDEU!';
    }
    for(i = 0; i < palavraArr.length; i++){
        let text = document.createTextNode(palavraArr[i]+' ');
        jogo.append(text);
    }
    letras.forEach(element => {
        let item = document.createElement('li');
        let lista = document.createElement('ul');
        item = document.createTextNode(element);
        lista.appendChild(item);
        jogadas.appendChild(lista);
    });
}

feedback();

click.addEventListener('click', function() {
    jogadas.innerHTML = ' ';
    jogo.innerHTML = ' ';
    chance.innerHTML = ' ';
    feedback();
});

function jogoDaVelha(){
    let letra = document.getElementById('letra').value.toLowerCase();
    if(palavraArr.toString() === palavra.toString()) return;
    if(chances === 0) return;
    desmembrar(letra);
}