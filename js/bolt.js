var Point = require('./point');

var Bolt = function (px,py,xv,yv,damage){
  this.pos = new Point(px,py);
  this.xv = xv;
  this.yv = yv;
  this.damage = damage;
  this.currentSprite = 0;

  this.draw = function(ctx,vp,c1,c2){
    this.sprites[this.currentSprite](this,ctx,vp,c1,c2);
    this.currentSprite = (this.currentSprite+1)%this.sprites.length;
  };

  this.sprites = [
    function(that, ctx,vp,c1,c2){
      ctx.fillStyle = c2;
      ctx.fillRect((that.pos.x - 5) - vp.pos.x, (that.pos.y - 5), 10, 10);
      ctx.fillStyle = c1;
      ctx.fillRect((that.pos.x - 3) - vp.pos.x, (that.pos.y - 3), 6, 6);
    },
    function(that, ctx,vp,c1,c2){
      ctx.fillStyle = c1;
      ctx.fillRect((that.pos.x - 5) - vp.pos.x, (that.pos.y - 5), 10, 10);
      ctx.fillStyle = c2;
      ctx.fillRect((that.pos.x - 3) - vp.pos.x, (that.pos.y - 3), 6, 6);
    }
  ];

  this.move = function () {       
    this.pos.x += this.xv;
    this.pos.y += this.yv;
  };

};

module.exports = Bolt;