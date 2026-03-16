const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let cadastro = []

rl.question("Digite seu nome: ", (input1) => {
    rl.question("Digite sua idade: ", (input2) => {
        rl.question("Digite seu curso: ", (input3) => {
            aluno = {
                nome: input1,
                idade: parseFloat(input2),
                curso: input3
            }
            cadastro.push(aluno);
            console.log(cadastro);
            
            rl.close();
        });
    });
});