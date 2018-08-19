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

    update() {
        this.players.forEach(player => player.update());
    }

    getPlayers() {
        return this.players;
    }

    setPlayers(players) {
        this.players = players;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    removePlayer(player) {
        this.players.splice(player, 1);
    }
};

module.exports = playerServer;
