class Paper{
constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        density:1.2,
        friction:0.5,
    }
    this.body=Bodies.circle(x,y,radius,options);
console.log(this.body.radius)
    this.radius=radius;
    World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    fill("green");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
    
   
    
    
  }

}