var Point = require('./point');

var Person = function(px, py){
    this.pos = new Point(px, py);
    this.xv = 0;
    this.yv = 0;
    this.health = 100;
    this.onG = false;
    this.c = '#ffffaa';
    this.sprites = [
        //0
        function (ctx,vp) { 
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 21) , 7, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 20) , 9, 20);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 19) , 1, 4);
                ctx.fillRect((this.pos.x - 6) - vp.pos.x, (this.pos.y - 18) , 1, 4);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 4) , 1, 4);
                ctx.fillRect((this.pos.x - 6) - vp.pos.x, (this.pos.y - 2) , 1, 2);
                ctx.fillRect((this.pos.x - 7) - vp.pos.x, (this.pos.y - 1) , 1, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 18) , 5, 5);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 17) , 7, 3);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 14) , 3, 14);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 13) , 5, 1);
                ctx.fillRect((this.pos.x + 2) - vp.pos.x, (this.pos.y - 13) , 3, 1);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 13) , 1, 13);
                ctx.fillRect((this.pos.x + 2) - vp.pos.x, (this.pos.y - 13) , 1, 13);
        },
        //1
        function (ctx,vp) {
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 21) , 7, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 20) , 9, 20);
                ctx.fillRect((this.pos.x + 5) - vp.pos.x, (this.pos.y - 19) , 1, 4);
                ctx.fillRect((this.pos.x + 6) - vp.pos.x, (this.pos.y - 18) , 1, 4);
                ctx.fillRect((this.pos.x + 5) - vp.pos.x, (this.pos.y - 4) , 1, 4);
                ctx.fillRect((this.pos.x + 6) - vp.pos.x, (this.pos.y - 2) , 1, 2);
                ctx.fillRect((this.pos.x + 7) - vp.pos.x, (this.pos.y - 1) , 1, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 18) , 5, 5);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 17) , 7, 3);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 14) , 3, 14);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 13) , 3, 1);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 13) , 5, 1);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 13) , 1, 13);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 13) , 1, 13);
        },      
                //ctx.fillStyle = '#3F5A77';
                //ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 21) , 7, 1);
                //ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 20) , 9, 20);
                //ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 7) , 11, 7);
                //ctx.fillRect((this.pos.x - 6) - vp.pos.x, (this.pos.y - 3) , 13, 3);
                //ctx.fillRect((this.pos.x - 7) - vp.pos.x, (this.pos.y - 1) , 15, 1);
                //ctx.fillStyle = 'black';
                //ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 18) , 5, 5);
                //ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 17) , 7, 3);
                //ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 14) , 3, 14);
                //ctx.fillStyle = '#E0BB00';
                //ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 13) , 4, 1);
                //ctx.fillRect((this.pos.x + 1) - vp.pos.x, (this.pos.y - 13) , 4, 1);
                //ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 13) , 1, 13);
                //ctx.fillRect((this.pos.x + 1) - vp.pos.x, (this.pos.y - 13) , 1, 13);
                
        //2     
        function (ctx,vp) {
                ctx.fillStyle = '#3F5A77';
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 27) , 7, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 26) , 9, 24);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 2) , 8, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 1) , 7, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y + 0) , 4, 1);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 24) , 1, 5);
                ctx.fillRect((this.pos.x - 6) - vp.pos.x, (this.pos.y - 22) , 1, 4);
                ctx.fillStyle = 'black';
                ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 26) , 5, 5);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 25) , 7, 3);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 21) , 3, 1);
                ctx.fillRect((this.pos.x + 1) - vp.pos.x, (this.pos.y - 20) , 1, 20);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 20) , 2, 1);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 19) , 3, 1);
                ctx.fillRect((this.pos.x + 2) - vp.pos.x, (this.pos.y - 19) , 3, 1);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 19) , 1, 19);
                ctx.fillRect((this.pos.x + 2) - vp.pos.x, (this.pos.y - 19) , 1, 19);
        },
        //3
        function (ctx,vp) {
                ctx.fillStyle = '#3F5A77';
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 27) , 7, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 26) , 9, 24);
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 2) , 8, 1);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 1) , 7, 1);
                ctx.fillRect((this.pos.x + 1) - vp.pos.x, (this.pos.y + 0) , 4, 1);
                ctx.fillRect((this.pos.x + 5) - vp.pos.x, (this.pos.y - 24) , 1, 5);
                ctx.fillRect((this.pos.x + 6) - vp.pos.x, (this.pos.y - 22) , 1, 4);
                ctx.fillStyle = 'black';
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 26) , 5, 5);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 25) , 7, 3);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 21) , 3, 1);
                ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 20) , 1, 20);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((this.pos.x + 3) - vp.pos.x, (this.pos.y - 20) , 2, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 19) , 3, 1);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 19) , 3, 1);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 19) , 1, 19);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 19) , 1, 19);
        },
        //4
        function (ctx,vp) { 
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 17) , 9, 17);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 8) , 11, 8);
                ctx.fillRect((this.pos.x - 6) - vp.pos.x, (this.pos.y - 5) , 12, 5);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 21) , 1, 7);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 20) , 2, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 19) , 5, 1);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 18) , 8, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 15) , 5, 5);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 14) , 7, 3);
                ctx.fillRect((this.pos.x + 1) - vp.pos.x, (this.pos.y - 10) , 1, 10);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 12) , 1, 1);
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 11) , 2, 1);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 10) , 1, 10);
                ctx.fillRect((this.pos.x + 2) - vp.pos.x, (this.pos.y - 10) , 1, 10);
                ctx.fillRect((this.pos.x + 4) - vp.pos.x, (this.pos.y - 11) , 1, 1);
        },
        //5
        function (ctx,vp) { 
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 17) , 9, 17);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 8) , 11, 8);
                ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 5) , 12, 5);
                ctx.fillRect((this.pos.x + 5) - vp.pos.x, (this.pos.y - 21) , 1, 7);
                ctx.fillRect((this.pos.x + 3) - vp.pos.x, (this.pos.y - 20) , 2, 1);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 19) , 5, 1);
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 18) , 8, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 15) , 5, 5);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 14) , 7, 3);
                ctx.fillRect((this.pos.x - 1) - vp.pos.x, (this.pos.y - 10) , 1, 10);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((this.pos.x + 4) - vp.pos.x, (this.pos.y - 12) , 1, 1);
                ctx.fillRect((this.pos.x + 2) - vp.pos.x, (this.pos.y - 11) , 2, 1);
                ctx.fillRect((this.pos.x - 2) - vp.pos.x, (this.pos.y - 10) , 1, 10);
                ctx.fillRect((this.pos.x + 0) - vp.pos.x, (this.pos.y - 10) , 1, 10);
                ctx.fillRect((this.pos.x - 4) - vp.pos.x, (this.pos.y - 11) , 1, 1);
        }
    ];
    this.drawHUD = function(ctx) {
        ctx.fillStyle = 'red';
        let displayedHealth = Math.floor(100*(this.health/100))
        if (displayedHealth < 0) {
            displayedHealth = 0;
        }
        ctx.fillRect(10,10, displayedHealth,10); 
    };
    this.draw = this.sprites[0];
    this.move = function (vp, level) {
        this.pos.x += this.xv;
        this.pos.y += this.yv;

        
        if (vp.pos.x >= 0 && vp.pos.x + vp.width <= level.width) {
            vp.pos.x += this.xv;
        } else if (vp.pos.x <= 0 && this.pos.x >= vp.width / 2 && this.xv > 0) {
            vp.pos.x += this.xv;
        } else if (vp.pos.x + vp.width >= level.width && this.pos.x <= level.width - (vp.width/2) && this.xv < 0){
            vp.pos.x += this.xv;
        }
    };
    this.update = function (holdUp) {
        // is called every frame
        if (this.onG && holdUp) {
            this.yv =- 10;
        }
        if (this.onG && this.xv > 0.05) {
            this.draw = this.sprites[0];
        } else if (this.onG && this.xv < -0.05) {
            this.draw = this.sprites[1];
        }
        if (this.yv < -0.2 && this.xv > 0.05 ) {
            this.draw = this.sprites[2];
        } else if (this.yv < -0.2 && this.xv < -0.05) {
            this.draw = this.sprites[3]
        }
        if (this.yv > 0.2 && this.xv > 0.05) {
            this.draw = this.sprites[4]
        } else if (this.yv > 0.2 && this.xv < -0.05){
            this.draw = this.sprites[5]
        }
    };
};

module.exports = Person;
