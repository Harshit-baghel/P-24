class Paper {
    constructor(x,y,r) {
      var options = {
          restitution:0.1,
          friction:1.5,
          density:1.2,
      }
      this.r=r;
      this.body = Bodies.circle(x,y,this.r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0, 0, this.r, this.r);
      pop()
    }
  };
