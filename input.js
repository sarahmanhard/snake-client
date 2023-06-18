const readline = require("readline");
const { Move_Up_Key, Move_Left_Key, Move_Down_Key, Move_Right_Key, Messages } = require('./constants');

let connection; // Variable to store the connection object

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit(); // Exit the process if the user presses Ctrl+C
    }

    switch (key) {
      case Move_Up_Key:
        connection.write('Move: up');
        break;
      case Move_Left_Key:
        connection.write('Move: left');
        break;
      case Move_Down_Key:
        connection.write('Move: down');
        break;
      case Move_Right_Key:
        connection.write('Move: right');
        break;
      default:
        const message = Messages[key];
        if (message) {
          connection.write(message);
        }
    }
  });
};

const setupInput = function(conn) {
  connection = conn; // Store the connection object
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.question("Enter your snake name (max 3 characters): ", (name) => {
    const formattedName = name.slice(0, 3).toUpperCase();
    connection.write(`Name: ${formattedName}`);
    handleUserInput(); // Start listening for user input after getting the snake name
  });

  rl.on('close', () => {
    process.exit(); // Exit the process when the readline interface is closed
  });

  rl.setPrompt('');
  rl.prompt();
};

module.exports = { setupInput };
