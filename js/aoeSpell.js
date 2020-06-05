var Point = require('./point');

var AoE = function (px,py,damage,lifetime){
  this.pos = new Point(px,py);
  this.framesLeft = lifetime;
  // function defining points around origin
  this.hitbox = function (point){
    let isHit = 
    point.x > this.pos.x - 15 
    && point.x < this.pos.x + 15 
    && point.y > this.pos.y - 15
    && point.y < this.pos.y + 15;
    return isHit;
  };
  this.damage = damage;

  this.draw = function(ctx,vp,c1,c2){
    
    ctx.fillStyle = c2;
    ctx.fillRect((this.pos.x - 15) - vp.pos.x,
    (this.pos.y - 15),
    30,30);
    ctx.fillStyle = c1;
    ctx.fillRect((this.pos.x - 12) - vp.pos.x,
    (this.pos.y - 12),
    24,24);
  }

  this.move = function (){
    this.framesLeft -= 1;
    
  };
};

module.exports = AoE;