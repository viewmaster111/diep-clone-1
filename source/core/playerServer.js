class playerServer {
    constructor() {
        this.players = [];
    }

    init() {
        console.log('playerServer Launched');
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
