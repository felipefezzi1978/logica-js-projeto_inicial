alert('Boas vindas ao jogo do núumero secreto');

let numeroSecreto = 9;
console.log(`Valor do numero secreto: ${numeroSecreto}`); // Dev acompanhar qual é o número secreto

let chute = prompt('Escolha um número entre 1 e 10');
console.log(`Valor do chute: ${chute}`); // Dev acompanhar qual é o chute


if (chute == numeroSecreto) {
    // se o chute for igual ao número secreto
        console.log(`Valor da comparação: ${chute == numeroSecreto}`);
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
        
} else {
    // se o chute for diferente ao número secreto
    alert('Você errou :(');
}