const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let nome = '';
let idade = '';
let cnh = '';

rl.question("Digite o seu nome: ", (input1) => {
    nome = input1;
    console.log("Seu nome é: ", nome);

    rl.question("Digite a sua idade: ", (input2) => {
        idade = parseFloat(input2);
        console.log("Sua idade é: ", idade)

        rl.question("Possui CNH? ", (input3) => {
            cnh = (input3);

            if (input3 == "sim"){
                console.log("Você pode dirigir!")
            } else {
                console.log("Você não pode dirigir")
            }
            rl.close();
        })

    })
})