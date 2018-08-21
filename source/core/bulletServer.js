class bulletServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.status = 'off';
        this.bullets = [];
    }

    init() {
        this.status = 'launching';
        this.updates = setInterval(() => this.update(this), 1000/60);
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] bulletServer Launched');
    }

    async shutdown() {
        this.status = 'closing';
        await clearInterval(this.updates);
        this.status = 'off';
        console.log('[\x1b[36mConsole\x1b[0m] bulletServer Closed');
    }

    update() {
        if(this.status !== 'on') return
        this.bullets.forEach(bullet => {
            bullet.update()
            if(bullet.transparency >= 1) this.bullets.splice(this.bullets.indexOf(bullet), 1);
        });
    }

    getBullets() {
        if(this.status !== 'on') return
        return this.bullets;
    }

    setBullets(bullets) {
        if(this.status !== 'on') return
        this.bullets = bullets;
    }

    addBullet(bullet) {
        if(this.status !== 'on') return
        this.bullets.push(bullet);
    }

    removeBullet(bullet) {
        if(this.status !== 'on') return
        this.bullets.splice(bullet, 1);
    }
};

module.exports = bulletServer;
