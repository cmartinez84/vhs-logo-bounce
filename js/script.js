// alert("Yo");


function myArea(hi){
  this.hi = hi;
  this.canvas =  document.createElement("canvas");
  this.canvas.width = 800;
  this.canvas.height = 800;
  this.ctx = this.canvas.getContext('2d');
  document.body.insertBefore(this.canvas, document.body.childNodes[0]);
}

function startVHS(){
  var stuff = new myArea();
  // alert("start");
}
startVHS();
