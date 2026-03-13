const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero = '';

rl.question("Digite um número: ", (input) => {
    numero = input;
    par = numero % 2;

    if (par == 0) {
        console.log("Esse número é par!")
    } else {
        console.log("Esse número é impar!")
    }

    rl.close();
})