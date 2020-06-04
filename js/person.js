var Point = require('./point');

var Person = function(px, py){
    this.pos = new Point(px, py);
    this.xv = 0;
    this.yv = 0;
    this.onG = false;
    this.c = '#ffffff';
    this.sprites = [
        function (ctx) {
            ctx.fillStyle = this.c;
            ctx.fillRect(this.pos.x - 5, this.pos.y - 17, 10, 17);
            ctx.fillRect(this.pos.x - 4, this.pos.y - 18, 8, 1);
            ctx.fillRect(this.pos.x - 3, this.pos.y - 19, 6, 1);
            ctx.fillRect(this.pos.x - 2, this.pos.y - 20, 4, 1);
            ctx.fillStyle = 'black';
            if (this.xv > 0.05){
                ctx.fillRect(this.pos.x + 1, this.pos.y - 17, 2, 3);
            } else if (this.xv < -0.05) {
                ctx.fillRect(this.pos.x - 3, this.pos.y - 17, 2, 3);
            } else {
                ctx.fillRect(this.pos.x + 1, this.pos.y - 17, 2, 3);
                ctx.fillRect(this.pos.x - 3, this.pos.y - 17, 2, 3);
            }
        },
        function (ctx) {
            ctx.fillStyle = this.c;
            ctx.fillRect(this.pos.x - 5, this.pos.y - 14, 10, 14);
            ctx.fillRect(this.pos.x - 4, this.pos.y - 15, 8, 1);
            ctx.fillRect(this.pos.x - 3, this.pos.y - 16, 6, 1);
            ctx.fillRect(this.pos.x - 2, this.pos.y - 17, 4, 1);
            ctx.fillRect(this.pos.x - 6, this.pos.y - 7, 12, 7);
            ctx.fillStyle = 'black';
            if(this.xv > 0.05){
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
            } else if(this.xv < -0.05){
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            } else {
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            }
        },
        function (ctx) {
            ctx.fillStyle = this.c;
            ctx.fillRect(this.pos.x - 5, this.pos.y - 13, 10, 13);
            ctx.fillRect(this.pos.x - 4, this.pos.y - 14, 8, 1);
            ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 6, 1);
            ctx.fillRect(this.pos.x - 2, this.pos.y - 16, 4, 1);
            ctx.fillRect(this.pos.x - 6, this.pos.y - 10, 12, 9);
            ctx.fillRect(this.pos.x - 7, this.pos.y - 8, 14, 7);
            ctx.fillStyle = 'black';
            if(this.xv > 0.05){
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
            } else if(this.xv < -0.05){
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            } else {
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            }
        }
    ];
    this.draw = this.sprites[1];
    this.move = function () {
        this.pos.x += this.xv;
        this.pos.y += this.yv;
    };
    this.update = function (holdUp) {
        // is called every frame
        if (this.onG && holdUp) {
            this.yv =- 10;
        }
        if (this.onG) {
            this.draw = this.sprites[1];
        } else {
            this.draw = this.sprites[0];
        }
        if(this.yv > 0.2){
            this.draw = this.sprites[2];
        }
    };
};

module.exports = Person;
