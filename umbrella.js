class Umbrella {
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(250 , 375, radius, options);
         this.width = radius;
         this.height = radius;
         World.add(world, this.body);
    }

    display() {
         imageMode(CENTER);
         image(man_image, 250, 375);
    }
}