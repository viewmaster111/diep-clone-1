class childManager {
    constructor(config) {
        this.config = config;
        this.status = 'off';
        this.servers = new Map();
    }

    init() {
        this.status = 'launching';
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] childManager Launched');
    }

    getServer(server) {
        return this.servers.get(server);
    }
};

module.exports = childManager;
