const { Command } = require('commander');
const { select, number } = require('@inquirer/prompts')
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

        const num1 = await number({
            message: "Input the first number of the operation",
            default: 0,
            required: true
        })
        const num2 = await number({
            message: "Input the first number of the operation",
            default: 0,
            required: true
        })

        let result;
        switch (operation) {
            case '+':
                result = Number(num1) + Number(num2);
                break;
            case '-':
                result = Number(num1) - Number(num2);
                break;
            case '*':
                result = Number(num1) * Number(num2);
                break;
            case '/':
                result = Number(num1) / Number(num2);
                break;
            default:
                console.log('Invalid numbers');
                return;
        }

        console.log(`You selected operation: ${operation}`);
        console.log(`The result is: ${result}`);

    });

program.parse(process.argv);