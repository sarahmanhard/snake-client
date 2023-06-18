const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.28.66.246", // IP address here
    port: 50541 // PORT number here
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handlers for connection events
  conn.on("connect", () => {
    console.log("Connected to the game server");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });

  return conn;
};

console.log("Connecting ...");
const connection = connect();

module.export = connection