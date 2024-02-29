// 'use strict';

// // This server code is adapted from Shivam Maindola's AndroidWebRTC example
// // https://github.com/shivammaindola/AndroidWebRTC
// // const cors = require('cors');

// // var os = require('os');
// // var nodeStatic = require('node-static');
// // var http = require('http');
// // var socketIO = require('socket.io');

// // const port = process.env.PORT || 3000;

// // var fileServer = new(nodeStatic.Server)();
// // var app = http.createServer(function(req, res) {
// //   fileServer.serve(req, res);
// // }).listen(port);
// // app.use(cors());

// // console.log('WebRTC signal server listening at ' + port + '...')

// // const server = require('http').createServer(app);
// // const io = require('socket.io')(server);
// // console.log('After socket initialization');
// ///
// // var http = require('http');
// // var socketIO = require('socket.io');

// // const port = process.env.PORT || 3000;

// // var server = http.createServer(function (req, res) {
// //   // Set CORS headers
// //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// //   res.setHeader('Access-Control-Allow-Credentials', true);

// //   // Your existing logic to serve static files
// //   // (e.g., using node-static)
// // });

// // server.listen(port, function () {
// //   console.log('WebRTC signal server listening at ' + port + '...');
// // });

// // // Pass the http.Server instance to socketIO directly
// // var io = socketIO(server);

// // // io.on('connection', function (socket) {
// // //   console.log('Client connected');
// // //   // Handle socket events here
// // // });

// // io.on('connection', function(socket) {
// //   console.log('WebRTC signal server listening at ' + port + '...')

// //   // convenience function to log server messages on the client
// //   function log() {
// //     var array = ['Message from server:'];
// //     array.push.apply(array, arguments);
// //     console.log(arguments[0], arguments[1]);
// //     socket.emit('log', array);
// //   }

// //   socket.on('message', function(message) {
// //     log('Client said: ', message);
// //     // for a real app, would be room-only (not broadcast)
// //     socket.broadcast.emit('message', message);
// //   });

// //   socket.on('create or join', function(room) {
// //     log('Received request to create or join room ' + room);

// //     var clientsInRoom = io.sockets.adapter.rooms[room];
// //     var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
// //     log('Room ' + room + ' now has ' + numClients + ' client(s)');

// //     if (numClients === 0) {
// //       socket.join(room);
// //       log('Client ID ' + socket.id + ' created room ' + room);
// //       socket.emit('created', room, socket.id);

// //     } else if (numClients === 1) {
// //       log('Client ID ' + socket.id + ' joined room ' + room);
// //       io.sockets.in(room).emit('join', room);
// //       socket.join(room);
// //       socket.emit('joined', room, socket.id);
// //       io.sockets.in(room).emit('ready');
// //     } else { // max two clients
// //       socket.emit('full', room);
// //     }
// //  // Add error handling
// //   socket.on('error', function(err) {
// //     console.error('Socket error:', err);
// //   });

// //   });

// //   socket.on('ipaddr', function() {
// //     var ifaces = os.networkInterfaces();
// //     for (var dev in ifaces) {
// //       ifaces[dev].forEach(function(details) {
// //         if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
// //           socket.emit('ipaddr', details.address);
// //         }
// //       });
// //     }
// //   });

// //   socket.on('bye', function(){
// //     console.log('received bye');
// //   });

// // });


// const http = require('http');
// const { Server } = require('socket.io');

// const server = http.createServer();
// const io = new Server(server, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST']
//   }
// });

// io.on('connection', (socket) => {
//   console.log('Client connected');

// //   // Send a welcome message to the client
// //   socket.emit('message', 'Welcome to the Socket.IO server!');

// //   // Listen for messages from the client
// //   socket.on('message', (message) => {
// //     console.log(`Received message: ${message}`);
    
// //     // Broadcast the message to all clients except the sender
// //     socket.broadcast.emit('message', `User sent: ${message}`);
// //   });



  

// //   // Listen for the socket to be closed
// //   socket.on('disconnect', () => {
// //     console.log('Client disconnected');
// //   });


// //     console.log('WebRTC signal server listening at ' + port + '...')

// //   // convenience function to log server messages on the client
// //   function log() {
// //     var array = ['Message from server:'];
// //     array.push.apply(array, arguments);
// //     console.log(arguments[0], arguments[1]);
// //     socket.emit('log', array);
// //   }

// //   socket.on('message', function(message) {
// //     log('Client said: ', message);
// //     // for a real app, would be room-only (not broadcast)
// //     socket.broadcast.emit('message', message);
// //   });

// //   socket.on('create or join', function(room) {
// //     log('Received request to create or join room ' + room);

// //     var clientsInRoom = io.sockets.adapter.rooms[room];
// //     var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
// //     log('Room ' + room + ' now has ' + numClients + ' client(s)');

// //     if (numClients === 0) {
// //       socket.join(room);
// //       log('Client ID ' + socket.id + ' created room ' + room);
// //       socket.emit('created', room, socket.id);

// //     } else if (numClients === 1) {
// //       log('Client ID ' + socket.id + ' joined room ' + room);
// //       io.sockets.in(room).emit('join', room);
// //       socket.join(room);
// //       socket.emit('joined', room, socket.id);
// //       io.sockets.in(room).emit('ready');
// //     } else { // max two clients
// //       socket.emit('full', room);
// //     }
// //  // Add error handling
// //   socket.on('error', function(err) {
// //     console.error('Socket error:', err);
// //   });

// //   });

// //   socket.on('ipaddr', function() {
// //     var ifaces = os.networkInterfaces();
// //     for (var dev in ifaces) {
// //       ifaces[dev].forEach(function(details) {
// //         if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
// //           socket.emit('ipaddr', details.address);
// //         }
// //       });
// //     }
// //   });

// //   socket.on('bye', function(){
// //     console.log('received bye');
// //   });




//   console.log('WebRTC signal server listening at ' + port + '...')

//   // convenience function to log server messages on the client
//   function log() {
//     var array = ['Message from server:'];
//     array.push.apply(array, arguments);
//     console.log(arguments[0], arguments[1]);
//     socket.emit('log', array);
//   }

//   socket.on('message', function(message) {
//     log('Client said: ', message);
//     // for a real app, would be room-only (not broadcast)
//     socket.broadcast.emit('message', message);
//   });

//   socket.on('create or join', function(room) {
//     log('Received request to create or join room ' + room);

//     var clientsInRoom = io.sockets.adapter.rooms[room];
//     var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
//     log('Room ' + room + ' now has ' + numClients + ' client(s)');

//     if (numClients === 0) {
//       socket.join(room);
//       log('Client ID ' + socket.id + ' created room ' + room);
//       socket.emit('created', room, socket.id);

//     } else if (numClients === 1) {
//       log('Client ID ' + socket.id + ' joined room ' + room);
//       io.sockets.in(room).emit('join', room);
//       socket.join(room);
//       socket.emit('joined', room, socket.id);
//       io.sockets.in(room).emit('ready');
//     } else { // max two clients
//       socket.emit('full', room);
//     }
//  // Add error handling
//   socket.on('error', function(err) {
//     console.error('Socket error:', err);
//   });

//   });

//   socket.on('ipaddr', function() {
//     var ifaces = os.networkInterfaces();
//     for (var dev in ifaces) {
//       ifaces[dev].forEach(function(details) {
//         if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
//           socket.emit('ipaddr', details.address);
//         }
//       });
//     }
//   });

//   socket.on('bye', function(){
//     console.log('received bye');
//   });


// });

// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`Socket.IO server is listening on port ${port}`);
// });


'use strict';

// This server code is adapted from Shivam Maindola's AndroidWebRTC example
// https://github.com/shivammaindola/AndroidWebRTC



// const http = require('http');
// const { Server } = require('socket.io');

// const server = http.createServer();



var os = require('os');
var nodeStatic = require('node-static');
var http = require('http');
var socketIO = require('socket.io');
const port = process.env.PORT || 3000;

var fileServer = new (nodeStatic.Server)();
var app = http.createServer(function (req, res) {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  fileServer.serve(req, res);
});

console.log('WebRTC signal server listening at ' + port + '...')

// var io = socketIO(app);

const io =  socketIO(app, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
io.listen(port, () => {
  console.log('Server is running on port ' + port);
});
io.sockets.on('connection', function(socket) {
  log('on conected: ', "Client conected: "+socket.id);

  // convenience function to log server messages on the client
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    console.log(arguments[0], arguments[1]);
    socket.emit('log', array);
  }

  socket.on('message', function(message) {
    log('Client said: ', message+" by "+socket.id);
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function(room) {
    log('Received request to create or join room ' + room);

    // var clientsInRoom = io.sockets.adapter.rooms[room];

    // log("clientsInRoom: "+ (io.sockets.adapter.rooms.get(room)).size);
    // var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
    const clientsInRoom = io.sockets.adapter.rooms.get(room);
    const numClients = clientsInRoom ? clientsInRoom.size : 0;
    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === 0) {
      socket.join(room);
      log('Client ID ' + socket.id + ' created room ' + room);
      socket.emit('created', room, socket.id);
      
    } else if (numClients === 1) {
      log('Client ID ' + socket.id + ' joined room ' + room);
      io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready');
    } else { // max two clients
      socket.emit('full', room);
    }
  });

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });

  socket.on('bye', function(){
    console.log('received bye');
  });

});