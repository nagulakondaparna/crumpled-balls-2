class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic:true
              }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbin.png");
      this.body.scale=0.05;
       World.add(world, this.body);
    }
    display(){
      var  position =this.body.position;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      
    }
  }
  