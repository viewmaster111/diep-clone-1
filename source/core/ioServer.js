const io = require('socket.io');
const player = require('./../entities/player.js')
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
        this.server.listen(this.config.port);
        setInterval(() => this.sendData(this), 1000/60);
        console.log('ioServer Launched');
    }

    handleConnection(socket) {
        console.log('connection!')
        this.connections.push(socket)
        socket.user = new player(this.id, socket.request.client._peername.address, socket.id);
        this.serverManager.getServer('playerServer').addPlayer(socket.user);
        this.sendData();
        this.id++;

        socket.on('disconnect', data => {
            if(socket.user !== undefined){
                this.serverManager.getServer('playerServer').removePlayer(this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user));
            }
            this.connections.splice(this.connections.indexOf(socket), 1);
            this.sendData();
        });

        socket.on('join game', (data, callback) => {
            if(socket.user.playing) return;
            this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].nick = data;
            this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].x = ~~(Math.random() * (this.config.w - 199) + 100);
            this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].y = ~~(Math.random() * (this.config.h - 199) + 100);
            this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].playing = true;
            this.sendData();
        });

        socket.on('user update', (r, km) => {
            if(!socket.user.playing) return;
            this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].r = r;
            this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].keyMap = km;
        });

        socket.on('start chatting', () => {
            if(socket.user.playing) this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].chatting = true;
        });
        socket.on('stop chatting', () => {
            if(socket.user.playing) this.serverManager.getServer('playerServer').getPlayers()[this.serverManager.getServer('playerServer').getPlayers().indexOf(socket.user)].chatting = false;
        });
    }

    sendData() {
        this.server.sockets.emit('get messages', this.serverManager.getServer('chatServer').getMessages())
        this.server.sockets.emit('get players', this.serverManager.getServer('playerServer').getPlayers());
    		this.server.sockets.emit('get id', this.id);
        this.server.sockets.emit('update world', {width: this.config.width, height: this.config.height})
        this.server.sockets.emit('update enemies', this.serverManager.getServer('entityServer').getEntities('squares'), this.serverManager.getServer('entityServer').getEntities('triangles'), this.serverManager.getServer('entityServer').getEntities('pentagons'));
        //this.server.sockets.emit('update bullets', this.serverManager.getServer('playerServer').bulletServer.getBullets())
    }
}

module.exports = ioServer;
