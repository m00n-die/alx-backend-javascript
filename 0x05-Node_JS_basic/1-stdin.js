const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


process.stdin.on("end", function() {
  process.stdout.write("This important software is now closing");
});

rl.question("Welcome to Holberton School, what is your name?\n", (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
