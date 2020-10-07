const prompt = require('prompt-sync')();

function inputInt(question) {
  let intValue = '';

  do {
    intValue = prompt(question);
    intValue = Number(intValue);

    if (!Number.isInteger(intValue))
      console.log("Error! Not an integer.")
  } while (!Number.isInteger(intValue))

  return intValue;
}

module.exports = inputInt;