let jogo = document.getElementById('jogo');
const chance = document.getElementById('chance');
const click = document.getElementById('click');
let chances = 6;
const palavras = ['maça', 'abacate', 'cenoura', 'banana', 'pera', 'goiaba', 'pitaya', 'abacaxi', 'acerola', 'graviola', 'goiaba'];

function escolhePalavra(){
    let palavraEscolhida = palavras[Math.floor(Math.random() * 10)];
    return palavraEscolhida = palavraEscolhida.split("");
}

const palavra = escolhePalavra();
let palavraArr = [];
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
    if(verificaLetra(letra).length === 0){
        chances--;
        return
    }
    adicionaLetra(letra);
}

function feedback(){
    let text2 = document.createTextNode(`Voce tem ${chances} chances`);
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
}

feedback();

click.addEventListener('click', function() {
    jogo.innerHTML = ' ';
    chance.innerHTML = ' ';
    feedback();
});

function jogoDaVelha(){
    let letra = document.getElementById('letra').value;
    if(palavraArr.toString() === palavra.toString()) return;
    if(chances === 0) return;
    console.log(palavraArr);
    desmembrar(letra);
}