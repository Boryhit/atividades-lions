const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let hobbies = [];

rl.question("Digite um hobbie seu: ", (input1) => {
    hobbies.push(input1);

    rl.question("Digite outro hobbie: ", (input2) => {
        hobbies.push(input2);

         rl.question("Digite mais um hobbie: ", (input3) => {
        hobbies.push(input3);
        
        console.log(`Seus hobbies são: ${hobbies}`);
    
        rl.close();
        })
    })


});