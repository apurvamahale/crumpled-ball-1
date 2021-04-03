
class Paper{
    constructor(x,y,radius){
        var options = {
            isstatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body =Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius= radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        //ellipseMode(RADIUS);
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        fill("yellow");
        image(this.image,0,0,this.radius,this.radius);
        pop();
        //circle(this.body.position.x,this.body.position.y,this.radius);
    }
};