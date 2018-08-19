const io = require('socket.io');
class ioServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.server = new io();
        this.connections = [];
        this.id = 1;
    }

    init() {
        this.server.on('connection', socket => this.handleConnection(socket));
        this.server.on('disconnect', data => this.handleDisconnect(data));
        this.server.listen(this.config.port);
        console.log('ioServer Launched');
    }

    handleConnection(socket) {
        this.connections.push(socket)
        socket.user = new entities.player(this.id, socket.request.client._peername.address, socket.id);
        this.serverManager.getServer('playerServer').addPlayer(socket.user);
        this.id++;
    }
    handleDisconnect(data) {
        if(socket.user !== undefined){
            this.serverManager.getServer('playerServer').delPlayer(this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user));
        }
        connections.splice(connections.indexOf(socket), 1);
    }
}

module.exports = ioServer;
