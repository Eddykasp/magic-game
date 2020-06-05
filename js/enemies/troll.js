var Enemy = require('../enemy');

var Troll = function(px, py){
  var enemy = new Enemy(px,py, -10, -28, 10, 0, 40);
  enemy.resistances = ['poison'];
  enemy.draw = function(ctx,vp){
    // TODO draw proper troll
    ctx.fillStyle = 'green';
    ctx.fillRect(
      enemy.pos.x + enemy.hitTL.x - vp.pos.x,
      enemy.pos.y + enemy.hitTL.y,
      enemy.hitBR.x - enemy.hitTL.x,
      enemy.hitBR.y - enemy.hitTL.y
    );
    enemy.drawHealth(ctx,vp);
  };
  return enemy;
};

module.exports = Troll;