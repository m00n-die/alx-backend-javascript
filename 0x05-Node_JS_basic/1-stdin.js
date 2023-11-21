const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = '';

rl.question('Welcome to Holberton School, what is your name?\n', (string) => {
  userInput = string;

  console.log(`Your name is: ${userInput}`);

  rl.close();
});

process.on('beforeExit', () => {
  console.log('This important software is now closing');
});
