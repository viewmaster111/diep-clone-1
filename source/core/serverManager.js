const chatServer = require('./chatServer.js'),
entityServer = require('./entityServer.js'),
playerServer = require('./playerServer.js'),
ioServer = require('./ioServer.js');
class serverManager {
    constructor(config) {
        this.config = config;
        this.servers = new Map();
        this.servers.set('chatServer', new chatServer(this.config, this));
        this.servers.set('entityServer', new entityServer(this.config, this));
        this.servers.set('playerServer', new playerServer(this.config, this));
        this.servers.set('ioServer', new ioServer(this.config, this));
    }

    init() {
        this.servers.get('chatServer').init();
        this.servers.get('entityServer').init();
        this.servers.get('playerServer').init();
        this.servers.get('ioServer').init();
    }

    getServer(server) {
        return this.servers.get(server);
    }
};

module.exports = serverManager;
