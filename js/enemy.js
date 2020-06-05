var Collidable = require('./collidable');

var Enemy = function(px, py, tlx, tly, brx, bry, health){
  var collidable = new Collidable(px, py, tlx, tly, brx, bry);
  collidable.maxHealth = health;
  collidable.health = health;
  collidable.isDead = false;
  collidable.resistances = [];
  collidable.weaknesses = [];
  collidable.applyDamage = function(damage, damageType){
    let modifier = 1;
    
    
    if (collidable.resistances.includes(damageType)){
      modifier = 0.5;
    } else if (collidable.weaknesses.includes(damageType)){
      modifier = 2;
    }
    
    collidable.health -= modifier*damage;
    if (collidable.health <= 0){
      collidable.isDead = true;
    }
  };
  collidable.drawHealth = function(ctx,vp){
    
    ctx.fillStyle = 'red';    
    ctx.fillRect(collidable.pos.x + collidable.hitTL.x - vp.pos.x,
      collidable.pos.y + collidable.hitTL.y - 5, 
       Math.floor((collidable.hitBR.x - collidable.hitTL.x) * (collidable.health/collidable.maxHealth)),
       3);
  };
  return collidable;
};

module.exports = Enemy;