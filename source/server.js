const serverManager = require('./core/serverManager.js');
const commandList = require('./commands/index.js');
class server {
    constructor(config) {
        this.config = config;
        this.serverManager = new serverManager(this.config);
    }

    async init() {
        await this.serverManager.init();
        console.log(`[\x1b[36mConsole\x1b[0m] Server running node ${process.version} On port ${this.config.port}`);
        var cmds = new (require('asyncconsole'))(' > ', data => {
            var msg = data.trim().toString().split(" ");
            for (var i in commandList) if(i === msg[0]) commandList[i](msg)
        });
    }
};

module.exports = server;
