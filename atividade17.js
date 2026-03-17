const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite o nome do usuário: ", (nomeUsuario) => {
    rl.question("Digite uma senha: ", (senhaUsuario) => {
        usuario = {
            nome: nomeUsuario,
            senha: senhaUsuario
        };

        if (usuario.nome == nomeUsuario && usuario.senha == senhaUsuario) {
            console.log("Login realizado com sucesso!");
        } else {
            console.log("Usuŕio ou senha incorretos!");
        };
        rl.close();
    });
});