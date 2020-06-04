(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Point = require('./point');

var Bolt = function (px,py,xv,yv,damage){
  this.pos = new Point(px,py);
  this.xv = xv;
  this.yv = yv;
  this.damage = damage;

  this.draw = function(ctx,c1,c2){
    ctx.fillStyle = c2;
    ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10);
    ctx.fillStyle = c1;
    ctx.fillRect(this.pos.x - 3, this.pos.y - 3, 6, 6);
  };

  this.move = function () {       
    this.pos.x += this.xv;
    this.pos.y += this.yv;
  };

  this.update = function (){
    
  };
};

module.exports = Bolt;
},{"./point":7}],2:[function(require,module,exports){
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
},{"./point":7}],3:[function(require,module,exports){
var Element = function(name, c1, c2){
  this.name = name;
  this.c1 = c1
  this.c2 = c2;
  this.effectTick = function () {};
};

module.exports = Element;
},{}],4:[function(require,module,exports){
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
},{"./collidable":2}],5:[function(require,module,exports){
var Person = require('./person');
var Bolt = require('./bolt');
var Spell = require('./spell');
var Element = require('./element');
var Collidable = require('./collidable');
var Enemy = require('./enemy');

var grav = 0.5;
var holdLeft = false;
var holdRight = false;
var holdUp = false;
var holdFire = false;
var canv;
var ctx;

var testCollider = new Enemy(400,600,-10,-100,10,10,30);
enemies = [testCollider];

var player = new Person(200, 200);
var spells = [];

window.onload = function() {
  canv = document.getElementById('gc');
  ctx = canv.getContext('2d');
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
        spells.push(new Spell(new Element('fire', 'orange', 'red'),
        [new Bolt(
          player.pos.x,
          player.pos.y - 10,
          10 * dir,
          0,
          10
          )]));
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
  player.move();
  if (player.onG) {
      player.xv *= 0.2;
  } else {
      player.yv += grav;
  }

  if (player.pos.x < 0) {
      player.pos.x = canv.width;
  }
  if (player.pos.x > canv.width) {
      player.pos.x = 0;
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
    enemy.draw(ctx);
  });
  player.draw(ctx);
  spells.forEach(element => {
    element.draw(ctx);
  });

}
},{"./bolt":1,"./collidable":2,"./element":3,"./enemy":4,"./person":6,"./spell":8}],6:[function(require,module,exports){
var Point = require('./point');

var Person = function(px, py){
    this.pos = new Point(px, py);
    this.xv = 0;
    this.yv = 0;
    this.onG = false;
    this.c = '#ffffff';
    this.sprites = [
        function (ctx) {
            ctx.fillStyle = this.c;
            ctx.fillRect(this.pos.x - 5, this.pos.y - 17, 10, 17);
            ctx.fillRect(this.pos.x - 4, this.pos.y - 18, 8, 1);
            ctx.fillRect(this.pos.x - 3, this.pos.y - 19, 6, 1);
            ctx.fillRect(this.pos.x - 2, this.pos.y - 20, 4, 1);
            ctx.fillStyle = 'black';
            if (this.xv > 0.05){
                ctx.fillRect(this.pos.x + 1, this.pos.y - 17, 2, 3);
            } else if (this.xv < -0.05) {
                ctx.fillRect(this.pos.x - 3, this.pos.y - 17, 2, 3);
            } else {
                ctx.fillRect(this.pos.x + 1, this.pos.y - 17, 2, 3);
                ctx.fillRect(this.pos.x - 3, this.pos.y - 17, 2, 3);
            }
        },
        function (ctx) {
            ctx.fillStyle = this.c;
            ctx.fillRect(this.pos.x - 5, this.pos.y - 14, 10, 14);
            ctx.fillRect(this.pos.x - 4, this.pos.y - 15, 8, 1);
            ctx.fillRect(this.pos.x - 3, this.pos.y - 16, 6, 1);
            ctx.fillRect(this.pos.x - 2, this.pos.y - 17, 4, 1);
            ctx.fillRect(this.pos.x - 6, this.pos.y - 7, 12, 7);
            ctx.fillStyle = 'black';
            if(this.xv > 0.05){
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
            } else if(this.xv < -0.05){
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            } else {
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            }
        },
        function (ctx) {
            ctx.fillStyle = this.c;
            ctx.fillRect(this.pos.x - 5, this.pos.y - 13, 10, 13);
            ctx.fillRect(this.pos.x - 4, this.pos.y - 14, 8, 1);
            ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 6, 1);
            ctx.fillRect(this.pos.x - 2, this.pos.y - 16, 4, 1);
            ctx.fillRect(this.pos.x - 6, this.pos.y - 10, 12, 9);
            ctx.fillRect(this.pos.x - 7, this.pos.y - 8, 14, 7);
            ctx.fillStyle = 'black';
            if(this.xv > 0.05){
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
            } else if(this.xv < -0.05){
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            } else {
                ctx.fillRect(this.pos.x + 1, this.pos.y - 15, 2, 3);
                ctx.fillRect(this.pos.x - 3, this.pos.y - 15, 2, 3);
            }
        }
    ];
    this.draw = this.sprites[1];
    this.move = function () {
        this.pos.x += this.xv;
        this.pos.y += this.yv;
    };
    this.update = function (holdUp) {
        // is called every frame
        if (this.onG && holdUp) {
            this.yv =- 10;
        }
        if (this.onG) {
            this.draw = this.sprites[1];
        } else {
            this.draw = this.sprites[0];
        }
        if(this.yv > 0.2){
            this.draw = this.sprites[2];
        }
    };
};

module.exports = Person;

},{"./point":7}],7:[function(require,module,exports){
var Point = function(x, y){
    this.x = x;
    this.y = y;
};

module.exports = Point;

},{}],8:[function(require,module,exports){
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
},{}]},{},[5]);
