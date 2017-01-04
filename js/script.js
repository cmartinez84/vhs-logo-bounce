
var allImages = ["images/vhs.png", "images/vhsblue.png", "images/vhsgreen.png", "images/vhsyellow.png", "images/vhsred.png" ]
function myArea(hi){
  this.hi = hi;
  this.canvas =  document.createElement("canvas");
  this.canvas.width = 800;
  this.canvas.height = 800;
  this.context = this.canvas.getContext('2d');
  document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  this.interval = setInterval(updateArea, 10);
}

var demoArea = new myArea();

function component(width, height, imageIndex, x, y){
  var _this = this;
  this.imageIndex = imageIndex;
  this.image  = new Image();
  this.image.src = allImages[imageIndex];
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 2;
  this.speedY = 1;
  ctx = demoArea.context;

  this.update = function(){
    this.y += this.speedY;
    this.x += this.speedX
    ctx.drawImage(_this.image,
          this.x, this.y
          );
  }

  this.checkHitWall = function(){
    if(this.x > (demoArea.canvas.width - this.width) || this.x <0){
      this.speedX = -(this.speedX);
      if(this.imageIndex === 4){
        this.imageIndex = 0
      }
      else{
        this.imageIndex +=1;
      }
      this.image.src = allImages[this.imageIndex];
    }
    if(this.y > (demoArea.canvas.height) - this.height || this.y <0){
      this.speedY = -(this.speedY);
      if(this.imageIndex === 4){
        this.imageIndex = 0
      }
      else{
        this.imageIndex +=1;
      }
      this.image.src = allImages[this.imageIndex];
    }
  }
}
var vhsLogo = new component (353, 185, 0, 200, 200);

function updateArea() {
  vhsLogo.checkHitWall();
  vhsLogo.update()
}
