const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

if (!process.stdin.isTTY) {
  process.on("exit", function() {
    console.log("This important software is now closing");
  });
};

rl.question("Welcome to Holberton School, what is your name?\n", (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
