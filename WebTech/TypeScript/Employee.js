"use strict";
class Employee {
    name = "";
    empId = 0;
    empPost = "";
    empSalary = 0;
    constructor(name, empId, empPost, empSalary) {
        this.name = name;
        this.empId = empId;
        this.empPost = empPost;
        this.empSalary = empSalary;
    }
    employeeDetails() {
        console.log("hii There is Employee Detils:");
        return `EmpId:${this.empId}\nName:${this.name}\nPost:${this.empPost}\nSalary:${this.empSalary} \n\n`;
    }
    setSalary(empSalary) {
        this.empSalary = empSalary;
    }
    setID(empId) {
        this.empId = empId;
    }
    setName(name) {
        this.name = name;
    }
    setPost(empPost) {
        this.empPost = empPost;
    }
    getPost() {
        return this.empPost;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.empId;
    }
    getSalary() {
        return this.empSalary;
    }
}
let obj1 = new Employee("Pranit", 232, "Developer", 85000);
let obj2 = new Employee("AVI", 232, "Tester", 75000);
let obj3 = new Employee("Rohit", 232, "HR", 55000);
console.log(obj1.employeeDetails());
console.log(obj2.employeeDetails());
console.log(obj3.employeeDetails());
obj1.setSalary(95000);
obj1.setName("Pranit Vane");
obj1.setPost("Senior Developer");
obj1.setID(111);
obj1.getID();
console.log(obj1.getName());
console.log(obj1.getPost());
console.log(obj1.getSalary());
obj2.setID(112);
obj2.setName("Avi Lokhande");
console.log(obj1.employeeDetails());
console.log(obj2.employeeDetails());
