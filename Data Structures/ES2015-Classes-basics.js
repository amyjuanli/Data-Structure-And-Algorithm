class Student {
    // constructor function is a special function which will run when the class is instantiated
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
    }

    // add individual instance's methods 
    fullName() { // using shorthand method definition introduced in ES2015
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return `You are expelled!!!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }
    addScore(score) {
        this.scores.push(score);
        return this.score;
    }
    calculateAverage() {
       let sum = this.scores.reduce((a, b) => a+b);
       return sum / this.scores.length;
    }

    // Add Class Methods via static key word (call utility functions)
    static enrolStudents(...students) {
        // do something 
    }
   

}

let student = new Student("Amy", "Li", 3)
console.log(student);
console.log(student.fullName);
console.log(student.markLate());
console.log(student.markLate());

// class Tree {

// }