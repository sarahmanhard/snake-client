const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');
const conn = connect(); // Call the connect function to establish a connection

conn.on('connect', () => {
  setupInput(conn); // Call the setupInput function after the connection is established
});
