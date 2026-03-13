const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let boolean = '';

rl.question("Você gosta de café? ", (input) => {
if(input == "sim"){
    boolean = true
}
    if (boolean == true) {
        console.log("Então você gosta de café!")
    } else {
        console.log("Então você não gosta de café!")
    }
    rl.close();
})