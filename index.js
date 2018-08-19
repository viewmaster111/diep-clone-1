const server = require('./source/server.js');

const diepServer = new server(require('./config.js'));
diepServer.init();
