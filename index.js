const io = require('socket.io-client');

// Connect to Service A
const socket = io('http://localhost:3000', {
    auth: {
      token: "abc"
    }
  });

socket.on('connect', () => {
  console.log('Connected to Service A');

  // Send a message to Service A
  socket.emit('message-from-b', 'Hello from Service B');

  // Listen for messages from Service A
  socket.on('message-from-a', (data) => {
    console.log('Received from A:', data);
  });
});
socket.on('connect_error', (error)=>{
  console.log('Error:', error.message);
});
// Optionally handle disconnection
socket.on('disconnect', () => {
  console.log('Disconnected from Service A');
});
