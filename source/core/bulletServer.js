class bulletServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.bullets = [];
    }

    init() {
        console.log('bulletServer Launched');
        this.updates = setInterval(() => this.update(this), 1000/60);
    }

    update() {
        this.bullets.forEach(bullet => {
            bullet.update()
            if(bullet.transparency >= 1) this.bullets.splice(this.bullets.indexOf(bullet), 1);
        });
    }

    getBullets() {
        return this.bullets;
    }

    setBullets(bullets) {
        this.bullets = bullets;
    }

    addBullet(bullet) {
        this.bullets.push(bullet);
    }

    removeBullet(bullet) {
        this.bullets.splice(bullet, 1);
    }
};

module.exports = bulletServer;
