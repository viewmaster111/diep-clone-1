const square = require('./../entities/polygons/square.js');
const triangle = require('./../entities/polygons/triangle.js');
const pentagon = require('./../entities/polygons/pentagon.js');
class entityServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.entities = new Map();
        this.entities.set('squares', []);
        this.entities.set('triangles', []);
        this.entities.set('pentagons', []);
    }

    init() {
        this.updates = setInterval(() => this.update(this), 1000 / 60);
        console.log('entityServer Launched');
    }

    getEntities(entities) {
        return this.entities.get(entities);
    }

    update() {
        var squares = this.entities.get('squares');
        var triangles = this.entities.get('triangles');
        var pentagons = this.entities.get('pentagons');
        var config = this.config;

        if (squares.length < config.minimumSquares) squares.push(new square(config))
        if (triangles.length < config.minimumTriangles) triangles.push(new triangle(config))
        if (pentagons.length < config.minimumPentagons) pentagons.push(new pentagon(config))

        squares.forEach(square => {
            if (square.x < 0) {
                square.xdir = Math.random() * 0.25;
                square.vel[0] += 2;
                square.x = 0;
            }
            if (square.y < 0) {
                square.ydir = Math.random() * 0.125;
                square.vel[1] += 2;
                square.y = 0;
            }
            if (square.x > config.w) {
                square.xdir = Math.random() * (0 - -0.125) - 0.125;
                square.vel[0] -= 2;
                square.x = config.w;
            }
            if (square.y > config.h) {
                square.ydir = Math.random() * (0 - -0.125) - 0.125;
                square.vel[1] -= 2;
                square.y = config.h;
            }
            square.update();
        });

        triangles.forEach(triangle => {
            if (triangle.x < 0) {
                triangle.xdir = Math.random() * 0.125;
                triangle.vel[0] += 2;
                triangle.x = 0;
            }
            if (triangle.y < 0) {
                triangle.ydir = Math.random() * 0.125;
                triangle.vel[1] += 2;
                triangle.y = 0;
            }
            if (triangle.x > config.w) {
                triangle.xdir = Math.random() * (0 - -0.125) - 0.125;
                triangle.vel[0] -= 2;
                triangle.x = config.w;
            }
            if (triangle.y > config.h) {
                triangle.ydir = Math.random() * (0 - -0.125) - 0.125;
                triangle.vel[1] -= 2;
                triangle.y = config.h;
            }
            triangle.update();
        });

        pentagons.forEach(pentagon => {
            if (pentagon.x < 0) {
                pentagon.xdir = Math.random() * 0.125;
                pentagon.vel[0] += 2;
                pentagon.x = 0;
            }
            if (pentagon.y < 0) {
                pentagon.ydir = Math.random() * 0.125;
                pentagon.vel[1] += 2;
                pentagon.y = 0;
            }
            if (pentagon.x > config.w) {
                pentagon.xdir = Math.random() * (0 - -0.125) - 0.125;
                pentagon.vel[0] -= 2;
                pentagon.x = config.w;
            }
            if (pentagon.y > config.h) {
                pentagon.ydir = Math.random() * (0 - -0.125) - 0.125;
                pentagon.vel[1] -= 2;
                pentagon.y = config.h;
            }
            pentagon.update();
        });

        this.entities.set('squares', squares);
        this.entities.set('triangles', triangles);
        this.entities.set('pentagons', pentagons);
    }
};

module.exports = entityServer;
