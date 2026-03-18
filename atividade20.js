const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];
let soma = 0;
let media = 0;

rl.question("Digite a primeira nota: ", (input1) => {
    let inputNumber1 = parseFloat(input1)
    notas.push(inputNumber1);

    rl.question("Digite a segunda nota: ", (input2) => {
    let inputNumber2 = parseFloat(input2)
    notas.push(inputNumber2);

        rl.question("Digite a terceira nota: ", (input3) => {;
        let inputNumber3 = parseFloat(input3)
        notas.push(inputNumber3);

            rl.question("Digite a quarta nota: ", (input4) => {;
            let inputNumber4 = parseFloat(input4)
            notas.push(inputNumber4);

            notas.forEach(element => {
                soma += element;
            });
            media = soma / notas.length;

            if (media >= 7){
                console.log("Aprovado");
            } else if (media >5 && media <= 6.9) {
                console.log("Recuperação");
            } else {
                console.log("Reprovado");
            }

            console.log("Sua media é: ", media);

            rl.close();
            }); 
        }); 
    }); 
});