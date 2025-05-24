alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt((Math.random()*100)+1);
console.log(`Valor do numero secreto: ${numeroSecreto}`); // Dev acompanhar qual é o número secreto
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroSecreto}`);    
    
    // se o chute for igual que número secreto
    if (chute == numeroSecreto) {
        break;        
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

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);  
// }