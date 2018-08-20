const bulletServer = require('./bulletServer.js'),
chatServer = require('./chatServer.js'),
clientServer = require('./clientServer.js'),
collisionServer = require('./collisionServer.js'),
entityServer = require('./entityServer.js'),
ioServer = require('./ioServer.js'),
playerServer = require('./playerServer.js');

class serverManager {
    constructor(config) {
        this.config = config;
        this.status = 'off';
        this.servers = new Map();
        this.servers.set('bulletServer', new bulletServer(this.config, this));
        this.servers.set('chatServer', new chatServer(this.config, this));
        this.servers.set('clientServer', new clientServer(this.config, this));
        this.servers.set('collisionServer', new collisionServer(this.config, this));
        this.servers.set('entityServer', new entityServer(this.config, this));
        this.servers.set('ioServer', new ioServer(this.config, this));
        this.servers.set('playerServer', new playerServer(this.config, this));
    }

    async init() {
        this.status = 'launching';
        await this.servers.get('chatServer').init();
        await this.servers.get('entityServer').init();
        await this.servers.get('playerServer').init();
        await this.servers.get('bulletServer').init();
        await this.servers.get('collisionServer').init();
        await this.servers.get('ioServer').init();
        await this.servers.get('clientServer').init();
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] serverManager Launched');
    }

    getServer(server) {
        return this.servers.get(server);
    }
};

module.exports = serverManager;
