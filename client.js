const net = require('net');// Importing the 'net' module for network functionality
const { IP, PORT } = require('./constants'); // importing IP and PORT constants from another file
const readline = require("readline");
// establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); // Interpret incoming data as text
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    
  });
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

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn; // Return the connection object
};

//Export the connect function
module.exports = { connect };