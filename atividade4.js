const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let anoDeNascimento = '';
let anoAtual = new Date().getFullYear();

rl.question("Digite o ano de nascimento: ", (input) => {
    anoDeNascimento = parseFloat(input);
    idade = anoAtual - anoDeNascimento 

    console.log(`Você tem ${idade} anos de idade`);
    rl.close();

})