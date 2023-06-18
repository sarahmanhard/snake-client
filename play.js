const net = require("net");
const readline = require("readline");

// Establishes a connection with the game server
function connect() {
  const conn = net.createConnection({
    host: "172.28.66.246", // IP address here
    port: 50541 // PORT number here
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question("Enter your snake name (max 3 characters): ", (name) => {
      // Truncate the name to max 3 characters
      const formattedName = name.slice(0, 3).toUpperCase();

      // Send the name to the server
      conn.write(`Name: ${formattedName}`);

      // Close the readline interface
      rl.close();
    });
  });
  // Event handlers for connection events
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });

  return conn;
}

console.log("Connecting ...");
console.log("Client module loaded");

setTimeout(() => {
  const connection = connect();
}, 1000);
module.exports = { connect };
