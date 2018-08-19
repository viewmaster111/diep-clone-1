const serverManager = require('./core/serverManager.js');
class server {
    constructor(config) {
        this.config = config;
        this.serverManager = new serverManager();
    }

    init() {
        console.log('Launching Server...');
        this.serverManager.init();
    }
};
module.exports = server;
