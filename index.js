const { Command } = require('commander');
const { input, select } = require('@inquirer/prompts')
const program = new Command();

program
    .name('Calculator CLI')
    .description('A simple calculator CLI application')
    .version('1.0.0');

program
    .command('greet <name>')
    .description('Greet a person by name')
    .action((name) => {
        console.log(`Hello, ${name}!`);
    });

program
    .command('choose')
    .description('Choose an option')
    .action(async () => {
        const operation = await select({
            message: "Select the operation you want to perform",
            choices: [
                {
                    name: "Addition",
                    value: "+",
                    description: "Add 2 numbers"
                },
                {
                    name: "Subtraction",
                    value: "-",
                    description: "Subtract 2 numbers"
                },
                {
                    name: "Multiplication",
                    value: "*",
                    description: "Multiply 2 numbers"
                },
                {
                    name: "Division",
                    value: "/",
                    description: "Divide 2 numbers"
                },
            ]
        });

        console.log(`You selected operation: ${operation}`);
    });

program.parse(process.argv);