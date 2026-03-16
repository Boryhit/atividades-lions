const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 
let resultado = '';

rl.question("Digite um número: ", (input) => {
    resultado = parseFloat(input);

        if (lista.includes(resultado)){
            console.log("Seu número está na lista!")
        } else {
            console.log("Seu número não está na lista")
        }
        rl.close();
})
