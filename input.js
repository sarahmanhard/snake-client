// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    // Ctrl + C (end of text) input
    console.log("Exiting...");
    process.exit();
  } else {
    const moveCommand = getMoveCommand(key);
    if (moveCommand) {
      connection.write(moveCommand);
    }
  }
};

const getMoveCommand = (key) => {
  const keyMap = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right",
  };

  return keyMap[key];
};

module.exports = { setupInput };
