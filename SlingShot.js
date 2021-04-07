class SlingShot {
constructor(bodyA, pointB) {
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.2,
length: 10,
}
this.pointB = pointB
this.SlingShot = Constraint.create(options);
World.add(world, this.SlingShot);
}

fly() {
this.SlingShot.bodyA = null;
}

display() {
if(this.SlingShot.bodyA) {
fill("blue");
stroke(48,22,8);
var pointA = this.SlingShot.bodyA.position;
var pointB = this.pointB;
strokeWeight(5);
line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
 }
}