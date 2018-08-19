const square = require('./../entities/polygons/square.js');
const triangle = require('./../entities/polygons/triangle.js');
const pentagon = require('./../entities/polygons/pentagon.js');
class entityServer {
    constructor(config) {
        this.config = config;
        this.entities = new Map();
        this.entities.set('squares', []);
        this.entities.set('triangles', []);
        this.entities.set('pentagons', []);
    }

    init() {
        console.log('entityServer Launched');
        this.updates = setInterval(()=>this.update(this), 1000 / 60);
    }

    update() {
        if (this.entities.get('squares').length < this.config.minimumSquares) this.entities.get('squares').push(new square(this.config))
        if (this.entities.get('triangles').length < this.config.minimumTriangles) this.entities.get('triangles').push(new triangle(this.config))
        if (this.entities.get('pentagons').length < this.config.minimumPentagons) this.entities.get('pentagons').push(new pentagon(this.config))
    }
};

module.exports = entityServer;
