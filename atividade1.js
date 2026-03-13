const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let nome = '';
let idade = '';

rl.question("Digite o seu nome: ", (input1) => {
    nome = input1;

    rl.question("Digite a sua idade: ", (input2) =>{
        idade = parseFloat(input2);

        console.log(`Seu nome é ${nome}, e sua idade é ${idade}`);
        rl.close();

    })
})