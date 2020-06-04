var Collidable = require('./collidable');

var Enemy = function(px, py, tlx, tly, brx, bry, health){
  var collidable = new Collidable(px, py, tlx, tly, brx, bry);
  collidable.health = health;
  collidable.isDead = false;
  collidable.resistances = [];
  collidable.weaknesses = [];
  collidable.applyDamage = function(damage, damageType){
    let modifier = 1;
    if (damageType in collidable.resistances){
      modifier = 0.5;
    } else if (damageType in collidable.weaknesses){
      modifier = 2;
    }
    collidable.health -= modifier*damage;
    if (collidable.health <= 0){
      collidable.isDead = true;
    }
  }
  return collidable;
};

module.exports = Enemy;