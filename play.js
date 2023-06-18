const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');
const conn = connect(); // Call the connect function to establish a connection
setupInput(conn); // Call the setupInput function to set up user input handling using the connection