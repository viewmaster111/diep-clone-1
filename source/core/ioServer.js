const io = require('socket.io');
class ioServer {
    constructor(config) {
        this.config = config;
        this.server = new io();
    }

    init() {
        this.server.on('connection', socket => this.handleConnection(socket));
        this.server.listen(this.config.port);
        console.log('ioServer Launched');
    }

    handleConnection(socket) {

    }
}

module.exports = ioServer
