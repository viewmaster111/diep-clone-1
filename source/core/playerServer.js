class playerServer {
    constructor(config) {
        this.config = config;
        this.players = [];
    }

    init() {
        console.log('playerServer Launched');
    }

    update() {
        players.forEach(player => {
            player.update();
        }
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

    addPlayers(players) {
        this.players.push(players);
    }

    delPlayer(player) {
        this.players.splice(player, 1);
    }
};

module.exports = playerServer;
