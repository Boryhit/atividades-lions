const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let usuario = {
    nome: '',
    idade: '',
    cnh: ''
}

rl.question("Digite o seu nome: ", (input1) => {
    usuario.nome = input1;
    console.log("Seu nome é: ", usuario.nome);

    rl.question("Digite a sua idade: ", (input2) => {
        usuario.idade = parseFloat(input2);
        console.log("Sua idade é: ", usuario.idade)

        rl.question("Possui CNH? ", (input3) => {
            usuario.cnh = (input3);

            if (input3 == "sim"){
                console.log("Você pode dirigir!")
            } else {
                console.log("Você não pode dirigir")
            }
            rl.close();
        })

    })
})