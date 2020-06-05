var Person = require('./person');
var Bolt = require('./bolt');
var Spell = require('./spell');
var AoESpell = require('./aoeSpell');
var Element = require('./element');
var Enemy = require('./enemy');
var Viewport = require('./viewport');
var Level = require('./level');
var Troll = require('./enemies/troll');

var grav = 0.5;
var holdLeft = false;
var holdRight = false;
var holdUp = false;
var holdFire = false;
var canv;
var ctx;

var dummyCollider = new Enemy(0,0,0,0,0,0,100000);
enemies = [dummyCollider, new Troll(600,600)];

var level = new Level(1400, 1000);
var viewport;
var player = new Person(200, 500);
var spells = [];

window.onload = function() {
  canv = document.getElementById('gc');
  ctx = canv.getContext('2d');

  viewport = new Viewport(0, level.height - canv.height,
    canv.width, canv.height);
  game();
};

function game(){

  isPaused = false;
  //window.onblur = pauseGame;
  ctx.font = '30px Arial';
  window.intervalId = setInterval(update,1000/30);
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
}

function keyDown(evt) {
  
  switch (evt.keyCode) {
  case 37:
      holdLeft=true;
      break;
  case 38:
      holdUp = true;
      break;
  case 39:
      holdRight=true;
      break;
  case 32:
      if (!holdFire){
        let dir = 1;
        if (player.xv != 0){
            dir = player.xv / Math.abs(player.xv);
        }
        spells.push(new Spell(new Element('poison', 'orange', 'red'),
        [new Bolt(
            player.pos.x,
            player.pos.y - 10,
            10 * dir,
            0,
            10
          ),
          new AoESpell(
            0,0,2,10
          )
        ]));
      holdFire = true;
      }
      break;
  case 27:
      //pauseGame();
      break;
  }
}

function keyUp(evt) {
  switch(evt.keyCode) {
  case 37:
      holdLeft = false;
      break;
  case 38:
      if(player.yv < -4) {
          player.yv = -4;
      }
      holdUp = false;
      break;
  case 39:
      holdRight = false;
      break;
  case 32:
      holdFire = false;
  }
}

function update() {
  if(holdLeft) {
      player.xv = -4;
  }
  if(holdRight) {
      player.xv = 4;
  }
  player.move(viewport, level);
  if (player.onG) {
      player.xv *= 0.2;
  } else {
      player.yv += grav;
  }

  if (player.pos.x < 0) {
      player.pos.x = 0;
  }
  if (player.pos.x > canv.width) {
      player.pos.x = canv.width;
  }
  player.onG = false;
  
  if (player.pos.y >= canv.height) {
    
    player.pos.y = canv.height;
    player.onG = true;
    player.yv = 0.000001;
  }

  nextEnemies = [];
  enemies.forEach(enemy =>{
    if (!enemy.isDead){
      enemy.update(player);
      nextEnemies.push(enemy);
    }
  });
  enemies = nextEnemies;

  nextSpells = [];  
  spells.forEach(spell => {    
    spell.update();
    
    enemies.forEach(enemy => {
      spell.collide(enemy);
    });
    if (spell.phase < spell.types.length && spell.onScreen(canv)){      
      nextSpells.push(spell);      
    }    
  });  
  
  spells = nextSpells;  

  var isDead = false;

  player.update(holdUp);
  if(!isDead){
      drawScreen();
  }
}

function drawScreen() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canv.width, canv.height);

  enemies.forEach(enemy => {
    enemy.draw(ctx, viewport);
  });
  player.draw(ctx, viewport);
  spells.forEach(spell => {
    spell.draw(ctx, viewport);
  });
  player.drawHUD(ctx);
}