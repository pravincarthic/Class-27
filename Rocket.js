class Rocket{
    constructor(BodyA, BodyB){
        var option ={
            bodyA: BodyA,
            bodyB: BodyB,
            stiffness: 0.1,
            length:10       
        }
    
    
        this.rocket = Constraint.create(option);
        World.add(world, this.rocket);
    }
    display(){
        var pa = this.Rocket.bodyA.position;
        var pb = this.Rocket.bodyB.position;
        line(pa.x, pa.y, pb.x, pb.y);
    }

}