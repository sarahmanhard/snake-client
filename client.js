const net = require('net');// Importing the 'net' module for network functionality
const { IP, PORT } = require('./constants'); // importing IP and PORT constants from another file

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
    conn.write('Name: SAM'); // Send the name to the server
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn; // Return the connection object
};

//Export the connect function
module.exports = { connect };