const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.28.66.246", // IP address here
    port: 50541 // PORT number here
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send a Name message to the server
    conn.write("Name: YOUR_NAME");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });

  return conn;
};

module.exports = { connect };
