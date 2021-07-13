class hero {
    constructor(x,y,width,height){

    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    this.image=loadImage("pics/cap.png")
    World.add(world,this.body);
}
display(){
var pos = this. body.position;

imageMode(CENTER);
//fill(0,0,255);
image(this.image,pos.x,pos.y,this.width,this.height);
}
}