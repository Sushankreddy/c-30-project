class Rect{
  constructor(x, y, width, height, angle) {
    this.Visibility=255;
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
  
    World.add(world, this.body);
  }
  display(){
if(this.body.y<600){
    var angle = this.body.angle;
    push();
    fill("blue");
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    pop();
}
else{
  World.remove(world,this.body);
  push();
  tint(255,this.Visibility);
  image(this.image,yhis.body.position.x,this.body.position.y,50,50);
  this.Visibility=this.Visibility-5;
  pop();
}
  }
}