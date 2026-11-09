class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
let p1 = new Point(0, 4);
let p2 = new Point(4, 4);
console.log(Point.distance(p1, p2));
