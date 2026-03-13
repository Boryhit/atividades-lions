const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero = '';

rl.question("Digite um número: ", (input) => {
    numero = Number(input);

    for (i = 0; i > 100; i++){
        const resultado = numero * i;
        if (number == resultado){
            console.log("Seu número está na lista!")
        } else {
            console.log("Seu número não está na lista")
        }
    }

    rl.close();
})