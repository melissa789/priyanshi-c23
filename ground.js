class ground{
    constructor(x,y,w,h){
 var ground_option ={
     isStatic : true
 }
    this.ground = Bodies.rectangle(x,y,w,h,ground_option)
    this.width=w;
    this.height=h;
    World.add(world,this.ground)
}
display(){
  rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y, this.width,this.height);

}

}


