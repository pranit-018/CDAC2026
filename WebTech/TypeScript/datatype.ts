console.log("Welcome You All");

let num:number; //1number datatype
num = 23456;
console.log(num);
let fname:string; //2. String
fname="Pranit";
console.log(fname);
let cond:boolean=false; //3. boolean
console.log(cond);
//4.array 
let students:string[] = ["Raja","Rahul","Rupesh"];
console.log(students);
//5. Tupple : it use to store multiple values with different data type in array
let emp:[number,string,boolean] =[101,"pranit",true];
console.log(emp);
//6. enum : it allow us to create variables with constant values.
enum days{sun,mon,tue=101,wed,thus,fri,sat}
let data1= days.sun;
console.log(data1);

//7. union it allow us to store multiple values with defferent datatype.
let mix:number|string|boolean=true;
console.log(mix);

//8 null 
let emptyData = null;
console.log(emptyData);
//9. any
let data:any = "hello";
console.log(data);