class Plinko {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, 10, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 10, 10);
  }
}
