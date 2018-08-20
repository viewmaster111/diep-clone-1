const express = require('express');

class clientServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.status = 'off';
        this.router = express();
        this.router.use(express.static(require('path').resolve(__dirname, './../client')));
        this.server = require('http').createServer(this.router);
    }

    init() {
        this.status = 'launching';
        this.server.listen(process.env.PORT || this.config.port, process.env.IP || "0.0.0.0", () => {
            process.title = 'diep.io clone';
        });
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] clientServer Launched');
    }
}

module.exports = clientServer;
