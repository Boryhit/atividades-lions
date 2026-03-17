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
rl.question("Qual o nome do produto: ", (nomeProduto) => {
    rl.question("Qual o preço do produto: ", (precoProduto) => {
        rl.question("Quantidade em estoque: ", (quantidadeEstoque) => {
            produtos = {
                Nome: nomeProduto,
                Preco: parseFloat(precoProduto),
                Quantidade: parseFloat(quantidadeEstoque)
            }

            cadastro.push(produtos);
            console.log(cadastro);
            cadastrando();
        });
    });
});
    };
};
cadastrando();