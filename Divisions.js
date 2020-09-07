class Division extends Ground {
  display() {
    var Color = color(random(0, 255), random(0, 255), random(0, 255));
    var pos = this.body.position;
    rectMode(CENTER);
    fill(Color);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
