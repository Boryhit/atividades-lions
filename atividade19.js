const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldoInicial = 1000;
let saque = 0;

console.log("Seu saldo inicial é: R$", saldoInicial);

rl.question("Digite o quanto você quer sacar: ", (input) => {
    saque = input;

    if (saque < saldoInicial) {
        console.log("Você pode sacar.");
        let saldoFinal = saldoInicial - saque;
        console.log("Seu saldo agora é de: R$ ", saldoFinal);
    } else {
        console.log("Saldo Insuficiente");
    }
    rl.close();
});
