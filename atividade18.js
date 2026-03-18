const { stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: stdout
});

let tarefas = [];


rl.question("Digite a primeira tarefa: ", (input1) => {
    tarefas.push(input1);

    rl.question("Digite a segunda tarefa: ", (input2) => {
        tarefas.push(input2);

        rl.question("Digite a terceira tarefa: ", (input3) => {
            tarefas.push(input3);

            rl.question("Digite a quarta tarefa: ", (input4) => {
                tarefas.push(input4);

                rl.question("Digite a quinta tarefa: ", (input5) => {
                    tarefas.push(input5);
                    
                    for (i = 0; i <= tarefas.length; i++){
                        console.log(`Tarefa ${i}: ${tarefas[i]}`)
                    };
                    rl.close();
                });
            });
        });
    })
});
