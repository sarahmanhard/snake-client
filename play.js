const net = require("net");
const readline = require("readline");

let connection;

function connect() {
  const conn = net.createConnection({
    host: "172.28.66.246", // IP address here
    port: 50541 // PORT number here
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log("Enter your snake name (max 3 characters):");

    rl.question("", (name) => {
      const formattedName = name.slice(0, 3).toUpperCase();
      conn.write(`Name: ${formattedName}`);
      rl.close();
    });
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
//increased timout to give user longer to type commands before server times out
setTimeout(() => {
  connection = connect();
}, 3000);


module.exports = { connect };
