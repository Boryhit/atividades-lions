const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let soma = 0;
let resultado = 0;

rl.question("Digite um número: ", (input1) => {
    let inputNumber1 = parseFloat(input1)
    numeros.push(inputNumber1);

    rl.question("Digite outro número: ", (input2) => {
        let inputNumber2 = parseFloat(input2)
        numeros.push(inputNumber2);

        rl.question("Digite mais um número: ", (input3) => {
            let inputNumber3 = parseFloat(input3)
            numeros.push(inputNumber3);

            numeros.forEach((element) => {soma += element})
            console.log(soma);
            resultado = soma / numeros.length;
            console.log(`A média dos números é ${resultado}`);
           rl.close();
        })
    });
});