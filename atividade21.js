const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cadastro = [];

function cadastrando () {
    if (cadastro.length > 2) {
        rl.close()
    } else {
rl.question("Digite seu nome: ", (nomeContato) => {
    rl.question("Digite seu telefone: ", (telefoneContato) => {
        rl.question("Digite sua cidade: ", (cidadeContato) => {
            contato = {
                nome: nomeContato,
                telefone: telefoneContato,
                cidade: cidadeContato
            }

            cadastro.push(contato);
            console.log(cadastro);
            cadastrando();
        });
    });
});
    };
};
cadastrando();