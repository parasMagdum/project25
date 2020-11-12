class Paper {
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.3,
        }
        this.body = Bodies.circle(100,200,20,options);
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("aqua")
        ellipse(0,0,17,17);
        pop();
    }
}