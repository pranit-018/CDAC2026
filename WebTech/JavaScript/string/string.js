let msg = "You all are good students, You are bright students";
document.getElementById("d1").innerHTML=msg;
document.getElementById("d2").innerHTML=msg.length;
document.getElementById("d3").innerHTML=msg.toUpperCase();
document.getElementById("d4").innerHTML=msg.toLowerCase();
document.getElementById("d5").innerHTML=msg.indexOf("students");//first occurance index.
document.getElementById("d6").innerHTML=msg.indexOf("students",20);//check string from 20index and return index of next occurance .
document.getElementById("d7").innerHTML=msg.lastIndexOf("students");
document.getElementById("d8").innerHTML=msg.lastIndexOf("students",20);//search from last position.

//slice
document.getElementById("d9").innerHTML=msg.slice(5)
document.getElementById("d10").innerHTML=msg.slice(5,20)//from 5th(include) index till 20(exclude)
document.getElementById("d11").innerHTML=msg.slice(-5)//give last 5 characters.
document.getElementById("d12").innerHTML=msg.slice(-15,-2)//give characters between -15 index to -2.

//substring
document.getElementById("d13").innerHTML=msg.substring(15)//give string from given number till last
document.getElementById("d14").innerHTML=msg.substring(20)//give string from given number till second given number.

//substr()
document.getElementById("d15").innerHTML=msg.substr(20,5)//

// charAt()
document.getElementById("d16").innerHTML=msg.charAt(0);

//replace()
document.getElementById("d17").innerHTML=msg.replace("students","friends");//replace first occurance .
document.getElementById("d18").innerHTML=msg.replace(/students/g,"friends");//replace all 
document.getElementById("d19").innerHTML=msg.replace(/StUdenTs/ig,"friends");//replace all and ignore the case beacuse of i and g is gloable .

document.getElementById("d20").innerHTML=msg.replaceAll("students","friends");//replace ALL

//string split
console.log(msg);
console.log(msg.split());//split  element in the form of string array
console.log(msg.split(" "));//split  element in the form of array and seperator seperate them in different index   op = ['You', 'all', 'are', 'good', 'students,', 'You', 'are', 'bright', 'students'].









