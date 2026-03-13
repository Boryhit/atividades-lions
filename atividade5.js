const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idade = '';

rl.question("Digite a sua idade: ", (input) => {
    idade = parseFloat(input);

    if (idade >= 18) {
        console.log("Você tem mais de 18 anos!");
    } else {
        console.log("Voce não tem 18 anos!")
    }
    rl.close();
});