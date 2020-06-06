var Collidable = require('./collidable');

var Person = function(px, py){
    var collidable = new Collidable(px,py,-4,-21,5,0);
    collidable.xv = 0;
    collidable.yv = 0;
    collidable.health = 100;
    collidable.onG = false;
    this.applyDamage = function(damage, damageType){
        console.log('dmg');
        
        collidable.health -= damage;
    };
    collidable.c = '#ffffaa';
    collidable.sprites = [
        //0
        function (ctx,vp) { 
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 21) , 7, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 20) , 9, 20);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 19) , 1, 4);
                ctx.fillRect((collidable.pos.x - 6) - vp.pos.x, (collidable.pos.y - 18) , 1, 4);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 4) , 1, 4);
                ctx.fillRect((collidable.pos.x - 6) - vp.pos.x, (collidable.pos.y - 2) , 1, 2);
                ctx.fillRect((collidable.pos.x - 7) - vp.pos.x, (collidable.pos.y - 1) , 1, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 18) , 5, 5);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 17) , 7, 3);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 14) , 3, 14);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 13) , 5, 1);
                ctx.fillRect((collidable.pos.x + 2) - vp.pos.x, (collidable.pos.y - 13) , 3, 1);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 13) , 1, 13);
                ctx.fillRect((collidable.pos.x + 2) - vp.pos.x, (collidable.pos.y - 13) , 1, 13);
        },
        //1
        function (ctx,vp) {
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 21) , 7, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 20) , 9, 20);
                ctx.fillRect((collidable.pos.x + 5) - vp.pos.x, (collidable.pos.y - 19) , 1, 4);
                ctx.fillRect((collidable.pos.x + 6) - vp.pos.x, (collidable.pos.y - 18) , 1, 4);
                ctx.fillRect((collidable.pos.x + 5) - vp.pos.x, (collidable.pos.y - 4) , 1, 4);
                ctx.fillRect((collidable.pos.x + 6) - vp.pos.x, (collidable.pos.y - 2) , 1, 2);
                ctx.fillRect((collidable.pos.x + 7) - vp.pos.x, (collidable.pos.y - 1) , 1, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 18) , 5, 5);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 17) , 7, 3);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 14) , 3, 14);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 13) , 3, 1);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 13) , 5, 1);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 13) , 1, 13);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 13) , 1, 13);
        },      
                //ctx.fillStyle = '#3F5A77';
                //ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 21) , 7, 1);
                //ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 20) , 9, 20);
                //ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 7) , 11, 7);
                //ctx.fillRect((collidable.pos.x - 6) - vp.pos.x, (collidable.pos.y - 3) , 13, 3);
                //ctx.fillRect((collidable.pos.x - 7) - vp.pos.x, (collidable.pos.y - 1) , 15, 1);
                //ctx.fillStyle = 'black';
                //ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 18) , 5, 5);
                //ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 17) , 7, 3);
                //ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 14) , 3, 14);
                //ctx.fillStyle = '#E0BB00';
                //ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 13) , 4, 1);
                //ctx.fillRect((collidable.pos.x + 1) - vp.pos.x, (collidable.pos.y - 13) , 4, 1);
                //ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 13) , 1, 13);
                //ctx.fillRect((collidable.pos.x + 1) - vp.pos.x, (collidable.pos.y - 13) , 1, 13);
                
        //2     
        function (ctx,vp) {
                ctx.fillStyle = '#3F5A77';
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 27) , 7, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 26) , 9, 24);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 2) , 8, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 1) , 7, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y + 0) , 4, 1);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 24) , 1, 5);
                ctx.fillRect((collidable.pos.x - 6) - vp.pos.x, (collidable.pos.y - 22) , 1, 4);
                ctx.fillStyle = 'black';
                ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 26) , 5, 5);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 25) , 7, 3);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 21) , 3, 1);
                ctx.fillRect((collidable.pos.x + 1) - vp.pos.x, (collidable.pos.y - 20) , 1, 20);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 20) , 2, 1);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 19) , 3, 1);
                ctx.fillRect((collidable.pos.x + 2) - vp.pos.x, (collidable.pos.y - 19) , 3, 1);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 19) , 1, 19);
                ctx.fillRect((collidable.pos.x + 2) - vp.pos.x, (collidable.pos.y - 19) , 1, 19);
        },
        //3
        function (ctx,vp) {
                ctx.fillStyle = '#3F5A77';
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 27) , 7, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 26) , 9, 24);
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 2) , 8, 1);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 1) , 7, 1);
                ctx.fillRect((collidable.pos.x + 1) - vp.pos.x, (collidable.pos.y + 0) , 4, 1);
                ctx.fillRect((collidable.pos.x + 5) - vp.pos.x, (collidable.pos.y - 24) , 1, 5);
                ctx.fillRect((collidable.pos.x + 6) - vp.pos.x, (collidable.pos.y - 22) , 1, 4);
                ctx.fillStyle = 'black';
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 26) , 5, 5);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 25) , 7, 3);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 21) , 3, 1);
                ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 20) , 1, 20);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((collidable.pos.x + 3) - vp.pos.x, (collidable.pos.y - 20) , 2, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 19) , 3, 1);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 19) , 3, 1);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 19) , 1, 19);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 19) , 1, 19);
        },
        //4
        function (ctx,vp) { 
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 17) , 9, 17);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 8) , 11, 8);
                ctx.fillRect((collidable.pos.x - 6) - vp.pos.x, (collidable.pos.y - 5) , 12, 5);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 21) , 1, 7);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 20) , 2, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 19) , 5, 1);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 18) , 8, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 15) , 5, 5);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 14) , 7, 3);
                ctx.fillRect((collidable.pos.x + 1) - vp.pos.x, (collidable.pos.y - 10) , 1, 10);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 12) , 1, 1);
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 11) , 2, 1);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 10) , 1, 10);
                ctx.fillRect((collidable.pos.x + 2) - vp.pos.x, (collidable.pos.y - 10) , 1, 10);
                ctx.fillRect((collidable.pos.x + 4) - vp.pos.x, (collidable.pos.y - 11) , 1, 1);
        },
        //5
        function (ctx,vp) { 
                ctx.fillStyle = '#3F5A77'
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 17) , 9, 17);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 8) , 11, 8);
                ctx.fillRect((collidable.pos.x - 5) - vp.pos.x, (collidable.pos.y - 5) , 12, 5);
                ctx.fillRect((collidable.pos.x + 5) - vp.pos.x, (collidable.pos.y - 21) , 1, 7);
                ctx.fillRect((collidable.pos.x + 3) - vp.pos.x, (collidable.pos.y - 20) , 2, 1);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 19) , 5, 1);
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 18) , 8, 1);
                ctx.fillStyle = 'black';
                ctx.fillRect((collidable.pos.x - 3) - vp.pos.x, (collidable.pos.y - 15) , 5, 5);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 14) , 7, 3);
                ctx.fillRect((collidable.pos.x - 1) - vp.pos.x, (collidable.pos.y - 10) , 1, 10);
                ctx.fillStyle = '#E0BB00';
                ctx.fillRect((collidable.pos.x + 4) - vp.pos.x, (collidable.pos.y - 12) , 1, 1);
                ctx.fillRect((collidable.pos.x + 2) - vp.pos.x, (collidable.pos.y - 11) , 2, 1);
                ctx.fillRect((collidable.pos.x - 2) - vp.pos.x, (collidable.pos.y - 10) , 1, 10);
                ctx.fillRect((collidable.pos.x + 0) - vp.pos.x, (collidable.pos.y - 10) , 1, 10);
                ctx.fillRect((collidable.pos.x - 4) - vp.pos.x, (collidable.pos.y - 11) , 1, 1);
        }
    ];
    collidable.drawHUD = function(ctx) {
        ctx.fillStyle = 'red';
        let displayedHealth = Math.floor(100*(collidable.health/100))
        if (displayedHealth < 0) {
            displayedHealth = 0;
        }
        ctx.fillRect(10,10, displayedHealth,10); 
    };
    collidable.draw = collidable.sprites[0];
    collidable.move = function (vp, level) {
        collidable.pos.x += collidable.xv;
        collidable.pos.y += collidable.yv;

        
        if (vp.pos.x >= 0 && vp.pos.x + vp.width <= level.width) {
            vp.pos.x += collidable.xv;
        } else if (vp.pos.x <= 0 && collidable.pos.x >= vp.width / 2 && collidable.xv > 0) {
            vp.pos.x += collidable.xv;
        } else if (vp.pos.x + vp.width >= level.width && collidable.pos.x <= level.width - (vp.width/2) && collidable.xv < 0){
            vp.pos.x += collidable.xv;
        }
    };
    collidable.update = function (holdUp) {
        // is called every frame
        if (collidable.onG && holdUp) {
            collidable.yv =- 10;
        }
        if (collidable.onG && collidable.xv > 0.05) {
            collidable.draw = collidable.sprites[0];
        } else if (collidable.onG && collidable.xv < -0.05) {
            collidable.draw = collidable.sprites[1];
        }
        if (collidable.yv < -0.2 && collidable.xv > 0.05 ) {
            collidable.draw = collidable.sprites[2];
        } else if (collidable.yv < -0.2 && collidable.xv < -0.05) {
            collidable.draw = collidable.sprites[3]
        }
        if (collidable.yv > 0.2 && collidable.xv > 0.05) {
            collidable.draw = collidable.sprites[4]
        } else if (collidable.yv > 0.2 && collidable.xv < -0.05){
            collidable.draw = collidable.sprites[5]
        }
    };
    return collidable;
};

module.exports = Person;
