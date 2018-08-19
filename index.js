const server = require('./source/server.js');
const config = require('./config.js');

const diepServer = new server(config);
diepServer.init();
