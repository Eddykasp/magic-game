var Point = require('./point');

var Collidable = function(px, py, tlx, tly, brx, bry){
  this.pos = new Point(px,py);
  this.hitTL = new Point(tlx, tly);
  this.hitBR = new Point(brx, bry);
  this.applyEffect = function(effectTick){};
  this.applyDamage = function(damage, damageType){};
  this.draw = function(ctx){
    ctx.fillStyle = 'white';
    ctx.fillRect(this.pos.x + this.hitTL.x, this.pos.y + this.hitTL.y, this.hitBR.x-this.hitTL.x, this.hitBR.y-this.hitTL.y);
  };
};

module.exports = Collidable;