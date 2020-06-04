var Point = require('./point');

var Viewport = function(px,py,w,h){
  this.pos = new Point(px,py);
  this.width = w;
  this.height = h;
};

module.exports = Viewport;
