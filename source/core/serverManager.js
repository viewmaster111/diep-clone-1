const chatServer = require('./chatServer.js'),
entityServer = require('./entityServer.js'),
playerServer = require('./playerServer.js');
class serverManager {
    constructor(config) {
        this.config = config;
        this.servers = new Map();
        this.servers.set(chatServer, new chatServer());
        this.servers.set(entityServer, new entityServer());
        this.servers.set(playerServer, new playerServer());
    }

    init() {
        this.servers.get(chatServer).init();
        this.servers.get(entityServer).init();
        this.servers.get(playerServer).init();
    }
};

module.exports = serverManager;
