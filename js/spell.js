var Spell = function (element, types){
  this.element = element;
  this.types = types;
  this.phase = 0; 

  this.update = function() {
    this.types[this.phase].move();
    this.types[this.phase].update();
  };

  this.draw = function(ctx) {
    this.types[0].draw(ctx,element.c1,element.c2);
  };

  this.onScreen = function(canv){
    let x = this.types[this.phase].pos.x;
    let y = this.types[this.phase].pos.y;
    return x >= 0 && x <= canv.width && y >= 0 && y <= canv.height;
  };
  
  this.collide = function (collidable){
    if (this.types[this.phase].hasOwnProperty('xv')){
      // treat as point colliding with hit box
      let x = this.types[this.phase].pos.x;
      let y = this.types[this.phase].pos.y;
      
      if (
        x >= collidable.pos.x + collidable.hitTL.x 
        && x <= collidable.pos.x + collidable.hitBR.x
        && y >= collidable.pos.y + collidable.hitTL.y
        && y <= collidable.pos.y + collidable.hitBR.y){
          collidable.applyEffect(this.element.effectTick);
          collidable.applyDamage(this.types[this.phase].damage, this.element.name);
          this.phase += 1;
        }
    } else {
      // treat as aoe check if collidable positions within
      // TODO
    }
  };
};

module.exports = Spell;