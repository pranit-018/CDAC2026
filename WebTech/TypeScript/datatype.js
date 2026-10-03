"use strict";
console.log("Welcome You All");
let num; //1number datatype
num = 23456;
console.log(num);
let fname; //2. String
fname = "Pranit";
console.log(fname);
let cond = false; //3. boolean
console.log(cond);
//4.array 
let students = ["Raja", "Rahul", "Rupesh"];
console.log(students);
//5. Tupple : it use to store multiple values with different data type in array
let emp = [101, "pranit", true];
console.log(emp);
//6. enum : it allow us to create variables with constant values.
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 101] = "tue";
    days[days["wed"] = 102] = "wed";
    days[days["thus"] = 103] = "thus";
    days[days["fri"] = 104] = "fri";
    days[days["sat"] = 105] = "sat";
})(days || (days = {}));
let data1 = days.sun;
console.log(data1);
//7. union it allow us to store multiple values with defferent datatype.
let mix = true;
console.log(mix);
//8 null 
let emptyData = null;
console.log(emptyData);
//9. any
let data = "hello";
console.log(data);
