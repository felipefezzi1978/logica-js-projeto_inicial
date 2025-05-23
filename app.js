alert('Boas vindas ao jogo do núumero secreto');

let numeroSecreto = 5;
console.log(`Valor do numero secreto: ${numeroSecreto}`); // Dev acompanhar qual é o número secreto
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    
    chute = prompt(`Escolha um número entre 1 e 10`);    
    
    // se o chute for igual que número secreto
    if (chute == numeroSecreto) {

       alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);  

    } else {
        if (chute > numeroSecreto) {
            // se o chute for maior que o número secreto
            alert(`O núnmero secreto é menor que ${chute}`);
        } else {
            alert(`O núnmero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
} 
