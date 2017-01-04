

function myArea(hi){
  this.hi = hi;
  this.canvas =  document.createElement("canvas");
  this.canvas.width = 800;
  this.canvas.height = 800;
  this.context = this.canvas.getContext('2d');
  document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  this.interval = setInterval(updateArea, 20);

}

var demoArea = new myArea();

function component(width, height, image, x, y){
  // debugger;
  var _this = this;
  this.image  = new Image();
  this.image.src = image;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = demoArea.context;

  this.update = function(){
    ctx.drawImage(_this.image,
          100, 100
          );
  }

}
var vhsLogo = new component (100, 100, "images/vhsred.png", 0, 0);

function updateArea() {
  vhsLogo.update()
}
