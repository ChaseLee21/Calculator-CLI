const { Command } = require('commander');
const inquirer = require('inquirer');
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
    const answers = await inquirer.prompt([
        {
        type: 'list',
        name: 'option',
        message: 'Please choose an option:',
        choices: ['Option 1', 'Option 2', 'Option 3'],
        },
    ]);

console.log(`You selected: ${answers.option}`);
});

program.parse(process.argv);