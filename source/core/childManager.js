class childManager {
    constructor(config) {
        this.config = config;
        this.status = 'off';
        this.children = new Map();
    }

    init() {
        this.status = 'launching';
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] childManager Launched');
    }

    async shutdown() {
        this.status = 'closing';
        this.status = 'off';
        console.log('[\x1b[36mConsole\x1b[0m] childManager Closed');
    }

    getChild(child) {
        if(this.status !== 'on') return
        return this.children.get(server);
    }

    createChild() {
        if(this.status !== 'on') return
    }

    deleteChild() {
        if(this.status !== 'on') return
    }
};

module.exports = childManager;
