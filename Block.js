class block{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.Visibility = 255;
    this.color = color(random(0,0),random(100,255),random(100,255));
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 9){
      fill(this.color);
      rect(this.x*2, this.y*2, this.width*2, this.height*2);
    }
    else{
      World.remove(world,this.body);
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }
  }
}