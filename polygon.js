class Polygon{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
        }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,this.x-100,this.y-200,this.width,this.height);
        pop();
    }
}