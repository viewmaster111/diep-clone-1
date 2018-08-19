class playerServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.players = [];
    }

    init() {
        console.log('playerServer Launched');
        this.updates = setInterval(() => this.update(this), 1000/60);
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
