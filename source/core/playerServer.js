class playerServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.status = 'off';
        this.players = [];
    }

    init() {
        this.status = 'launching';
        this.updates = setInterval(() => this.update(this), 1000/60);
        console.log('[\x1b[36mConsole\x1b[0m] playerServer Launched');
        this.status = 'on';
    }

    async shutdown() {
        this.status = 'closing';
        await clearInterval(this.updates);
        this.status = 'off';
        console.log('[\x1b[36mConsole\x1b[0m] playerServer Closed');
    }

    update() {
        if(this.status !== 'on') return
        this.players.forEach(player => player.update());
    }

    getPlayers() {
        if(this.status !== 'on') return
        return this.players;
    }

    setPlayers(players) {
        if(this.status !== 'on') return
        this.players = players;
    }

    addPlayer(player) {
        if(this.status !== 'on') return
        this.players.push(player);
    }

    removePlayer(player) {
        if(this.status !== 'on') return
        this.players.splice(player, 1);
    }
};

module.exports = playerServer;
