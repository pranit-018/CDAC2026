"use strict";
class Student {
    //data members.
    stdId = 101;
    stdName = "pranit";
    stdContact = 7654344567;
    //member function
    studentDetails() {
        return `ID:${this.stdId} Name:${this.stdName} Contact:${this.stdContact}`;
    }
    // create constructor
    constructor(_id, _name, _contact) {
        this.stdContact = _contact;
        this.stdId = _id;
        this.stdName = _name;
    }
}
// create object of a class
let stdObj1 = new Student(101, "Pranit", 987654356);
let stdObj2 = new Student(102, "Sahil", 765435456);
let stdObj3 = new Student(103, "Nawaj", 895435456);
console.log(stdObj1.studentDetails());
console.log(stdObj2.studentDetails());
console.log(stdObj3.studentDetails());
