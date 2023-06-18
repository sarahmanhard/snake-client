const { Move_Up_Key, Move_Left_Key, Move_Down_Key, Move_Right_Key, Messages } = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
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
      if (Messages[key]) {
        connection.write(Messages[key]);
      }
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
