const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let frase = '';

rl.question("Digite uma frase: ", (input) => {
    frase = input

    console.log(`Sua frase possui ${frase.length} caracteres.`)

    rl.close();
});