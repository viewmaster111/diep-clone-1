const chatServer = require('./chatServer.js'),
entityServer = require('./entityServer.js'),
playerServer = require('./playerServer.js');
class serverManager {
    constructor(config) {
        this.config = config;
        this.servers = new Map();
        this.servers.set('chatServer', new chatServer(this.config));
        this.servers.set('entityServer', new entityServer(this.config));
        this.servers.set('playerServer', new playerServer(this.config));
    }

    init() {
        this.servers.get('chatServer').init();
        this.servers.get('entityServer').init();
        this.servers.get('playerServer').init();
    }
};

module.exports = serverManager;
