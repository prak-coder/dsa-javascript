class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.scores = [];
  }
  fullName() {
    return `your fullName is ${this.firstName} ${this.lastName}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}
const troy = new Student("troy", "barnes", 1);
const annie = new Student("annie", "edison", 1);

console.log(troy, annie);
console.log(troy.fullName());
console.log(annie.fullName());
console.log(annie.addScore(80));
console.log(annie.addScore(100));
console.log(annie.addScore(95));
console.log(annie.calculateAverage());
console.log(annie.addScore(50));
console.log(annie.calculateAverage());
