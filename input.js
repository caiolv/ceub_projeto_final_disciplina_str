const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.pause();

function input(question, cb = () => void 0) {
  return new Promise(resolve => {
    rl.question(question, (...args) => {
      args[0] = parseInt(args[0]);
      
      if (Number.isInteger(args[0])) {
        rl.pause();
        resolve(...args);
        cb(...args);
      } else { 
        throw('Please input a int.');
      }
    });
  });
}

module.exports = input;