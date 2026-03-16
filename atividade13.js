const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let biblioteca = ["O pequeno príncipe", "A Arte da Guerra", "O Princípe"];

rl.question("Adicione um livro: ", (input) => {
    biblioteca.push(input);

    rl.question("Pesquise um livro: ", (input1) => {
    console.log(`O livro que você pesquisou é ${biblioteca.includes(input1)}`);

    console.log("Os livros disponiveis nessa biblioteca são: ", biblioteca);
    
    rl.close();
});
});