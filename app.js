alert('Ola, vamos jogar um jogo?');
alert('Vou pensar em um numero de 1 a 10, tente adivinhar qual é!');
let nroSecreto = 9;
var chute = prompt('Qual é o seu palpite?');

if (chute == nroSecreto) {
    alert('Parabéns, você acertou!');
    console.log('O cara meteu o louco e acertou!');
    // buscar a classe container__informacoes e alterar o display para block
    document.querySelector('.container__informacoes').style.display = 'block';
} else if (chute != nroSecreto) {
    alert('Que pena, seu dinheiro é meu');
    console.log('O cara errou, que burro!');
    // buscar a classe container__informacoes e alterar o display para none
    document.querySelector('.container__informacoes_errou').style.display = 'block';
} else {
    alert('Você não digitou um número válido, tente novamente!');
    console.log('O cara não digitou um número válido');
}
