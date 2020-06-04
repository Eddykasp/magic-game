var Point = require('./point');

var Bolt = function (px,py,xv,yv,damage){
  this.pos = new Point(px,py);
  this.xv = xv;
  this.yv = yv;
  this.damage = damage;

  this.draw = function(ctx,vp,c1,c2){
    ctx.fillStyle = c2;
    ctx.fillRect((this.pos.x - 5) - vp.pos.x, (this.pos.y - 5), 10, 10);
    ctx.fillStyle = c1;
    ctx.fillRect((this.pos.x - 3) - vp.pos.x, (this.pos.y - 3), 6, 6);
  };

  this.move = function () {       
    this.pos.x += this.xv;
    this.pos.y += this.yv;
  };

  this.update = function (){
    
  };
};

module.exports = Bolt;